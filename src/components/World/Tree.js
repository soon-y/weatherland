import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { param, useIsDebug } from "@/lib/param"
import vertexShader from './shader/tree/vertexShader.glsl'
import fragmentShader from './shader/tree/fragmentShader.glsl'
import { useGLTF } from '@react-three/drei'

export default function Tree({ progressDebug, sunProgress, windDirDebug, windSpdDebug, gustsSpdDebug, windDir, windSpd, gustsSpd }) {
  const { nodes, materials } = useGLTF('models/tree.glb')
  const isDebug = useIsDebug()
  const progress = isDebug ? progressDebug : sunProgress
  const windDirection = isDebug ? windDirDebug * (Math.PI / 180) - Math.PI * 0.4 : windDir * (Math.PI / 180) - Math.PI * 0.4
  const windSpeed = isDebug ? windSpdDebug : windSpd
  const gustsSpeed = isDebug ? gustsSpdDebug : gustsSpd
  const leafMaterialRef = useRef()
  const trunkMaterial = useMemo(() => materials.trunk.clone(), [materials])
  const trunkShaderRef = useRef()
  const smoothWindDir = useRef(windDirection)

  const geometry = nodes.Cube.geometry
  geometry.setAttribute(
    'windWeight',
    geometry.attributes.color_1
  )

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: progress },
    uWindStrength: { value: windSpeed },
    uWindDir: { value: windDirection },
  }), [])

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime

    smoothWindDir.current = THREE.MathUtils.lerp(
      smoothWindDir.current,
      windDirection,
      delta * 2
    )

    if (trunkShaderRef.current) {
      trunkShaderRef.current.uniforms.uTime.value = time
      trunkShaderRef.current.uniforms.uWindStrength.value = windSpeed
      trunkShaderRef.current.uniforms.uWindDir.value = smoothWindDir.current
    }

    if (leafMaterialRef.current) {
      leafMaterialRef.current.uniforms.uTime.value = time
      leafMaterialRef.current.uniforms.uWindStrength.value = windSpeed
      leafMaterialRef.current.uniforms.uProgress.value = progress
      leafMaterialRef.current.uniforms.uWindDir.value = smoothWindDir.current
    }
  })

  useEffect(() => {
    trunkMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 }
      shader.uniforms.uWindStrength = { value: 0 }
      shader.uniforms.uWindDir = { value: 0 }

      shader.vertexShader =
        `
      uniform float uTime;
      uniform float uWindStrength;
      uniform float uWindDir;

      attribute vec4 windWeight;
      ` + shader.vertexShader

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
      #include <begin_vertex>

      float weight = windWeight.r;
      
      float branchWind =
      sin(
        uTime * 1.5 +
        position.y * 0.25
      )
      * 0.05
      * uWindStrength
      * weight;

    vec2 windDir = vec2(
      cos(uWindDir),
      sin(uWindDir)
    );

    transformed.x +=
      windDir.x * branchWind;

    transformed.z +=
      windDir.y * branchWind;
      `
      )

      trunkShaderRef.current = shader
    }

    trunkMaterial.needsUpdate = true
  }, [trunkMaterial])


  return (
    <group position={param.groundPos}>
      <group position={[-4.7, 0, -4]} scale={1.2} rotation-y={0.2}>
        <group position={[0, -0.199, 0]}>
          <mesh castShadow receiveShadow
            geometry={nodes.Cube.geometry}
            material={trunkMaterial}
          />

          <mesh castShadow receiveShadow scale={1}
            geometry={nodes.Cube_1.geometry}
          >
            <shaderMaterial
              ref={leafMaterialRef}
              vertexColors
              uniforms={uniforms}
              vertexShader={vertexShader}
              fragmentShader={fragmentShader}
            />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/tree.glb')
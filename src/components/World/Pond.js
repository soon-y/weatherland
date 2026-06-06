import * as THREE from 'three'
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { param } from "@/lib/param"
import vertexShader from './shader/pond/vertexShader.glsl'
import fragmentShader from './shader/pond/fragmentShader.glsl'

export default function Pond({ progress, windDir, windSpd, lightDir }) {
  const materialRef = useRef()

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uWindDir: { value: new THREE.Vector2(Math.cos(windDir.current), Math.sin(windDir.current)) },
    uWindSpeed: { value: windSpd.current },
    uProgress: { value: 0 },
    uLightPos: { value: new THREE.Vector3(...param.streetlightPos) },
    uLightDir: { value: lightDir },
    uLightAngle: { value: 2 },
    uLightPenumbra: { value: 0.5 },
  }), [])

  useFrame((_, delta) => {
    const mat = materialRef.current
    if (!mat) return

    mat.uniforms.uTime.value += delta
    mat.uniforms.uProgress.value = progress
    mat.uniforms.uWindDir.value = new THREE.Vector2(Math.cos(windDir.current), Math.sin(windDir.current))
    mat.uniforms.uWindSpeed.value = windSpd.current
  })

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, param.groundPos[1], -1]}>
      <planeGeometry args={[param.groundRadius * 3.5, param.groundRadius * 3.5, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}
import * as THREE from 'three'
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { param } from "@/lib/param"
import vertexShader from './shader/pond/vertexShader.glsl'
import fragmentShader from './shader/pond/fragmentShader.glsl'

export default function Pond({ progress, windDir, windSpd, lightDir, precipitation }) {
  const materialRef = useRef()
  const ripplesRef = useRef([])
  const rippleTimerRef = useRef(0)
  const MAX_RIPPLES = 20

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uWindDir: { value: new THREE.Vector2(Math.cos(windDir.current), Math.sin(windDir.current)) },
    uWindSpeed: { value: windSpd.current },
    uProgress: { value: 0 },
    uLightPos: { value: new THREE.Vector3(...param.streetlightPos) },
    uLightDir: { value: lightDir },
    uLightAngle: { value: 2 },
    uLightPenumbra: { value: 0.5 },
    uRippleCount: { value: 0 },
    uRipplePos: { value: Array.from({ length: MAX_RIPPLES }, () => new THREE.Vector2()) },
    uRippleAge: { value: new Float32Array(MAX_RIPPLES) },
  }), [])

  useFrame((_, delta) => {
    const mat = materialRef.current
    if (!mat) return

    rippleTimerRef.current += delta

    if (precipitation > 0) {
      const interval = Math.max( 0.02, 0.15 / Math.sqrt(precipitation))

      if (rippleTimerRef.current > interval) {
        rippleTimerRef.current = 0
        const angle = Math.random() * Math.PI
        const radius = Math.sqrt(Math.random())
        ripplesRef.current.push({
          x: Math.cos(angle) * radius,
          y: -Math.sin(angle) * radius,
          age: 0
        })
      }
    }

    for (const ripple of ripplesRef.current) {
      ripple.age += delta
    }

    ripplesRef.current = ripplesRef.current.filter(ripple => ripple.age < 1.0)

    mat.uniforms.uTime.value += delta
    mat.uniforms.uProgress.value = progress
    mat.uniforms.uWindDir.value = new THREE.Vector2(Math.cos(windDir.current), Math.sin(windDir.current))
    mat.uniforms.uWindSpeed.value = windSpd.current
    mat.uniforms.uRippleCount.value = ripplesRef.current.length
    for ( let i = 0; i < MAX_RIPPLES; i++ ) {
      const ripple = ripplesRef.current[i]
      if (ripple) {
        mat.uniforms.uRipplePos.value[i].set(ripple.x, ripple.y)
        mat.uniforms.uRippleAge.value[i] = ripple.age
      }
    }
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
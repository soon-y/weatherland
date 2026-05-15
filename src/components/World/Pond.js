import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { param, useIsDebug } from "@/lib/param"
import vertexShader from './shader/pond/vertexShader.glsl'
import fragmentShader from './shader/pond/fragmentShader.glsl'

export default function Pond({ progressDebug, sunProgress, windDirDebug, windSpdDebug, gustsSpdDebug, windDir, windSpd, gustsSpd }) {
  const materialRef = useRef()
  const isDebug = useIsDebug()
  const progress = isDebug ? progressDebug : sunProgress
  const windDirection = isDebug ? windDirDebug * -(Math.PI / 180) - Math.PI * 0.5 : windDir * -(Math.PI / 180) - Math.PI * 0.5
  const windSpeed = isDebug ? windSpdDebug : windSpd
  const gustsSpeed = isDebug ? gustsSpdDebug : gustsSpd

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uWindDir: { value: windDirection },
    uWindSpeed: { value: windSpeed },
    uProgress: { value: progress },
  }), [])

  useFrame((_, delta) => {
    const mat = materialRef.current
    if (!mat) return

    mat.uniforms.uTime.value += delta
    mat.uniforms.uWindDir.value = windDirection
    mat.uniforms.uWindSpeed.value = windSpeed
    mat.uniforms.uProgress.value = progress
  })

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, param.groundPos[1], -1]}>
      <circleGeometry args={[param.groundRadius * 1.8, 256, Math.PI, Math.PI]} />
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
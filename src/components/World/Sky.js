import * as THREE from 'three'
import { Sky } from "@react-three/drei"
import { useRef } from "react"
import { param, useIsDebug } from "@/lib/param"
import { useFrame } from "@react-three/fiber"
import Light from "./light"

export default function WorldSky({ progressDebug, sunProgress }) {
  const currentProgress = useRef(0)
  const skyRayleigh = useRef(0)
  const skyRef = useRef()
  const sun = useRef(new THREE.Vector3())
  const isDebug = useIsDebug()
  const progress = isDebug ? progressDebug : sunProgress

  useFrame(() => {
    const sky = skyRef.current
    if (!sky) return

    let targetProgress = progress
    let diff = targetProgress - currentProgress.current
    let targetRayleigh = getRayValue(targetProgress)

    if (diff > 0.5) diff -= 1
    if (diff < -0.5) diff += 1

    targetProgress = currentProgress.current + diff
    currentProgress.current += (targetProgress - currentProgress.current) * 0.05
    const pos = getSunPosition(currentProgress.current)
    sun.current.fromArray(pos)

    skyRayleigh.current += (targetRayleigh - skyRayleigh.current) * 0.05
    sky.material.uniforms.rayleigh.value = skyRayleigh.current

    sky.material.uniforms.sunPosition.value.copy(sun.current)
  })

  return (
    <>
      <Sky
        ref={skyRef}
        mieCoefficient={0}
        mieDirectionalG={0.3}
      />

      <Light progressDebug={progress} sunProgress={sunProgress} sun={sun.current} />
    </>
  )
}

function getSunPosition(progress) {
  const angle = progress * Math.PI * 2 - Math.PI / 2
  const radius = param.sunRadius
  return [
    Math.cos(angle) * radius,
    Math.sin(angle) * radius,
    0 
  ]
}

function getRayValue(progress) {
  if (progress <= 0.25) {
    return 10 - (8 * (progress / 0.25))
  }

  if (progress <= 0.75) {
    const t = (progress - 0.25) / 0.5
    return 2 - 1.8 * (1 - Math.cos(Math.PI * t)) / 2
  }

  const t = (progress - 0.75) / 0.25
  return 2 + (8 * t)
}
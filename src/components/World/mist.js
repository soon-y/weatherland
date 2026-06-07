import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const MAX_COUNT = 1000

export default function Mist({ visibility, windDir, windSpd, isDay }) {
  const pointsRef = useRef()
  const { camera } = useThree()

  const positions = useMemo(
    () => new Float32Array(MAX_COUNT * 3),
    []
  )

  const particles = useMemo(
    () =>
      Array.from({ length: MAX_COUNT }, () => ({
        x: 0,
        y: Math.random() * 8,
        z: 0,
        vx: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2
      })),
    []
  )

  const forward = useMemo(
    () => new THREE.Vector3(),
    []
  )

  useFrame((_, delta) => {
    if (!pointsRef.current) return

    const mistAmount = THREE.MathUtils.clamp(
      (5000 - visibility) / 5000,
      0,
      1
    )

    const visibleCount = Math.floor(
      mistAmount * MAX_COUNT
    )

    camera.getWorldDirection(forward)

    const dynamicArea = Math.max(
      200,
      camera.position.y * 8
    )

    const centerX =
      camera.position.x +
      forward.x * dynamicArea * 0.3

    const centerZ =
      camera.position.z +
      forward.z * dynamicArea * 0.3

    const wind = Math.min(
      windSpd.current,
      15
    )

    const windX =
      Math.cos(windDir.current) *
      wind *
      0.03

    const windZ =
      Math.sin(windDir.current) *
      wind *
      0.03

    for (let i = 0; i < visibleCount; i++) {
      const p = particles[i]

      if (
        p.x === 0 &&
        p.z === 0
      ) {
        p.x =
          centerX +
          (Math.random() - 0.5) *
            dynamicArea

        p.z =
          centerZ +
          (Math.random() - 0.5) *
            dynamicArea
      }

      p.x += (p.vx + windX) * delta
      p.z += (p.vz + windZ) * delta

      const dx = p.x - centerX
      const dz = p.z - centerZ

      if (
        Math.abs(dx) >
          dynamicArea * 0.5 ||
        Math.abs(dz) >
          dynamicArea * 0.5
      ) {
        p.x =
          centerX +
          (Math.random() - 0.5) *
            dynamicArea

        p.z =
          centerZ +
          (Math.random() - 0.5) *
            dynamicArea

        p.y = Math.random() * 8
      }

      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      positions[i * 3 + 2] = p.z
    }

    pointsRef.current.geometry.setDrawRange(
      0,
      visibleCount
    )

    pointsRef.current.geometry.attributes.position.needsUpdate =
      true
  })

  return (
    <points
      ref={pointsRef}
      frustumCulled={false}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={8}
        color={
          isDay
            ? '#dfe5e4'
            : '#2f3740'
        }
        transparent
        opacity={0.04}
        depthWrite={false}
      />
    </points>
  )
}
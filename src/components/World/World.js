import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { levaStore } from 'leva'
import { param, useIsDebug } from "@/lib/param"
import DebugUI from "../debugUI"
import { useEffect, useState } from "react"
import WorldGround from "./Ground"
import Environment from "./environment"

function World({ hourly, daily, index }) {
  const [indexD, setIndexD] = useState(0)
  const isDebug = useIsDebug()

  useEffect(() => {
    if (!hourly || index == null) return
    setIndexD(Math.floor(index / 24))
  }, [hourly, index])

  return <>
    <DebugUI store={levaStore} />
    <Canvas shadows camera={{
      fov: 50,
      near: 0.01,
      far: 100,
      position: param.camPos,
    }}
      gl={{
        antialias: true,
        toneMappingExposure: 1,
        physicallyCorrectLights: true,
      }}
    >
      <OrbitControls
        target={param.worldPos}
        maxDistance={50}
        minDistance={isDebug ? 0 : 20}
        maxPolarAngle={isDebug ? Math.PI * 0.5 : Math.PI * 0.5}
        minPolarAngle={isDebug ? 0 : Math.PI * 0.3}
        enableDamping
        dampingFactor={0.03}
      />

      <group position={param.worldPos}>
        <Environment store={levaStore} hourly={hourly} daily={daily} index={index} indexD={indexD} />
        <WorldGround />
      </group>
    </Canvas>
  </>
}

export default World
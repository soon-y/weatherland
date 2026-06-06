import * as THREE from 'three'
import { useControls } from "leva"
import { useEffect, useRef, useState } from "react"
import { param, timeToSec, useIsDebug } from "@/lib/param"
import WorldSky from "./Sky"
import Grass from "./Grass"
import { Windvane } from "./Windvane"
import Pond from "./Pond"
import Tree from "./Tree"
import { useFrame } from "@react-three/fiber"

export default function Environment({ store, hourly, daily, index, indexD }) {
  const [sunProgress, setSunProgress] = useState(0)
  const [windDirH, setWindDirH] = useState(0)
  const [windSpdH, setWindSpdH] = useState(0)
  const [gustsSpdH, setGustsSpdH] = useState(0)
  const isDebug = useIsDebug()
  const timeRef = useRef(0)
  const windSpeedRef = useRef(0)
  const windDirRef = useRef(0)
  const finalWindSpd = useRef(0)

  const { progress } = useControls('Day', {
    progress: { value: 0.5, min: 0, max: 1, step: 0.01 },
  }, { store })

  const { direction, speed } = useControls('Wind', {
    direction: { value: 90, min: 0, max: 360, step: 1 },
    speed: { value: 2, min: 0, max: 50, step: 1 },
  }, { store })

  const { strength, period, duration } = useControls('Gusts', {
    strength: { value: 5, min: 0, max: 100, step: 1 },
    period: { value: 20, min: 5, max: 60, step: 1 },
    duration: { value: 3, min: 1, max: 10, step: 1 },
  }, { store })

  useEffect(() => {
    if (!hourly || !daily || index == null || indexD == null) return

    let progressInDay
    const oneDayInSec = 24 * 60 * 60
    const daylightInSec = daily.daylight_duration[indexD]
    const sunrise = daily.sunrise[indexD].split('T')[1]
    const sunset = daily.sunset[indexD].split('T')[1]
    const sunriseInSec = timeToSec(Number(sunrise.split(':')[0]), sunrise.split(':')[1])
    const sunsetInSec = timeToSec(Number(sunset.split(':')[0]), sunset.split(':')[1])
    const nowInSec = timeToSec(index % 24)

    if (nowInSec < sunriseInSec) {
      progressInDay = (nowInSec / sunriseInSec) * 0.25
    } else if (nowInSec <= sunsetInSec) {
      progressInDay = 0.25 + ((nowInSec - sunriseInSec) / daylightInSec) * 0.5
    } else {
      progressInDay = 0.75 + ((nowInSec - sunsetInSec) / (oneDayInSec - daylightInSec - sunriseInSec)) * 0.25
    }
    setSunProgress(Number(progressInDay.toFixed(2)))

    setWindDirH(hourly.wind_direction_10m[index])
    setWindSpdH(hourly.wind_speed_10m[index])
    setGustsSpdH(hourly.wind_gusts_10m[index])
  }, [index, indexD])

  useFrame((_, delta) => {
    const gustCycle = isDebug ? period : 20
    const gustDuration = isDebug ? duration : 3

    timeRef.current += delta

    const targetDirection = isDebug ? direction * -(Math.PI / 180) - Math.PI * 0.5 : windDirH * -(Math.PI / 180) - Math.PI * 0.5
    const targetSpeed = isDebug ? speed : windSpdH
    const targetGustSpeed = isDebug ? strength : gustsSpdH

    windDirRef.current += (targetDirection - windDirRef.current) * 0.05
    windSpeedRef.current += (targetSpeed - windSpeedRef.current) * 0.05

    const cycleTime = timeRef.current % gustCycle

    let gustEffect = 0

    if (cycleTime < gustDuration) {
      gustEffect = Math.sin((cycleTime / gustDuration) * Math.PI) * targetGustSpeed
    }

    finalWindSpd.current = windSpeedRef.current + gustEffect

    const sway = Math.sin(timeRef.current * 2) * (finalWindSpd.current * 0.001)
    windDirRef.current = targetDirection + sway
  })

  const lightPos = new THREE.Vector3(...param.streetlightPos)
  const targetPos = new THREE.Vector3(...param.streetlightTargetPos)

  const lightDir = new THREE.Vector3()
  lightDir.subVectors(targetPos, lightPos).normalize()

  return (
    <>
      <WorldSky progress={isDebug ? progress : sunProgress} />
      <Windvane windDir={windDirRef} windSpd={finalWindSpd} />
      <Grass progress={isDebug ? progress : sunProgress} windDir={windDirRef} windSpd={finalWindSpd} lightDir={lightDir}/>
      <Pond progress={isDebug ? progress : sunProgress} windDir={windDirRef} windSpd={finalWindSpd} lightDir={lightDir}/>
      <Tree progress={isDebug ? progress : sunProgress} windDir={windDirRef} windSpd={finalWindSpd} />
    </>
  )
}
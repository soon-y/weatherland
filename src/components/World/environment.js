import { useControls } from "leva"
import { useEffect, useState } from "react"
import { timeToSec } from "@/lib/param"
import WorldSky from "./Sky"
import Grass from "./Grass"
import { Windvane } from "./Windvane"
import Pond from "./Pond"
import Tree from "./Tree"

export default function Environment({ store, hourly, daily, index, indexD }) {
  const [sunProgress, setSunProgress] = useState(0)
  const [windDir, setWindDir] = useState(0)
  const [windSpd, setWindSpd] = useState(0)
  const [gustsSpd, setGustsSpd] = useState(0)

  useEffect(() => {
    if (!hourly || !daily || index == null || indexD == null) return

    let progress
    const oneDayInSec = 24 * 60 * 60
    const daylightInSec = daily.daylight_duration[indexD]
    const sunrise = daily.sunrise[indexD].split('T')[1]
    const sunset = daily.sunset[indexD].split('T')[1]
    const sunriseInSec = timeToSec(Number(sunrise.split(':')[0]), sunrise.split(':')[1])
    const sunsetInSec = timeToSec(Number(sunset.split(':')[0]), sunset.split(':')[1])
    const nowInSec = timeToSec(index % 24)

    if (nowInSec < sunriseInSec) {
      progress = (nowInSec / sunriseInSec) * 0.25
    } else if (nowInSec <= sunsetInSec) {
      progress = 0.25 + ((nowInSec - sunriseInSec) / daylightInSec) * 0.5
    } else {
      progress = 0.75 + ((nowInSec - sunsetInSec) / (oneDayInSec - daylightInSec - sunriseInSec)) * 0.25
    }
    setSunProgress(Number(progress.toFixed(2)))

    setWindDir(hourly.wind_direction_10m[index])
    setWindSpd(hourly.wind_speed_10m[index])
    setGustsSpd(hourly.wind_gusts_10m[index])

  }, [index, indexD])

  const { progress, windDirection, windSpeed, gustsSpeed } = useControls('Env', {
    progress: { value: 0.5, min: 0, max: 1, step: 0.01 },
    windDirection: { value: 90, min: 0, max: 360, step: 1 },
    windSpeed: { value: 2, min: 0, max: 50, step: 1 },
    gustsSpeed: { value: 5, min: 0, max: 100, step: 1 },
  }, { store })

  return (
    <>
      <WorldSky progressDebug={progress} sunProgress={sunProgress} />
      <Grass
        progressDebug={progress} sunProgress={sunProgress}
        windDirDebug={windDirection} windSpdDebug={windSpeed} gustsSpdDebug={gustsSpeed}
        windDir={windDir} windSpd={windSpd} gustsSpd={gustsSpd}
      />
      <Windvane
        windDirDebug={windDirection} windSpdDebug={windSpeed} gustsSpdDebug={gustsSpeed}
        windDir={windDir} windSpd={windSpd} gustsSpd={gustsSpd}
      />
      <Pond
        progressDebug={progress} sunProgress={sunProgress}
        windDirDebug={windDirection} windSpdDebug={windSpeed} gustsSpdDebug={gustsSpeed}
        windDir={windDir} windSpd={windSpd} gustsSpd={gustsSpd}
      />
      <Tree
        progressDebug={progress} sunProgress={sunProgress}
        windDirDebug={windDirection} windSpdDebug={windSpeed} gustsSpdDebug={gustsSpeed}
        windDir={windDir} windSpd={windSpd} gustsSpd={gustsSpd}
      />
    </>
  )
}
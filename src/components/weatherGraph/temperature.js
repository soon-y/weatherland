import { useEffect, useState } from "react"
import WeeklyGraphBox from "./graphBox/weeklyLineGraphBox"
import { param } from "@/lib/param"

export default function WeeklyTemperature({ display, hourly, indexW, index, hourly2, daily1, daily2, code, isDay }) {
  const [hoverIndex, setHover] = useState(index)
  const current = hourly[hoverIndex]
  const validIndex = hoverIndex - indexW * 24 >= 0 && hoverIndex - indexW * 24 < 25
  const maxVal = param.maxInTwo(hourly, hourly2)
  const minVal = param.minInTwo(hourly, hourly2)
  let unit = '°C'

  useEffect(() => {
    setHover(index)
  }, [indexW])

  return (
    <div className="w-full pb-4">
      <div className="pt-4 sm:pt-8">
        <div className="flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <span>{hoverIndex - indexW * 24}:00</span>
                <span className="text-gray-400">{display !== 'feels like' ? 'Feels like' : 'Actual'}</span>
              </>
              :
              <>
                <span>Min</span>
                <span>Max</span>
              </>
          }
        </div>

        <div className="text-2xl flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <div>
                  {current} <span className="text-base">{unit}</span>
                </div>

                <div className="text-gray-400">
                  {hourly2[hoverIndex]}<span className="text-base"> {unit}</span>
                </div>
              </>
              :
              <>
                <div>
                  {daily1[indexW]} <span className="text-base">{unit}</span>
                </div>

                <div>
                  {daily2[indexW]} <span className="text-base">{unit}</span>
                </div>
              </>
          }
        </div>
      </div>
      <WeeklyGraphBox
        display={display} unit={unit} min={minVal} max={maxVal} step={(maxVal - minVal) * 0.2} hourly2={hourly2}
        hourly={hourly} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover} code={code} isDay={isDay}
      />
    </div>
  )
}
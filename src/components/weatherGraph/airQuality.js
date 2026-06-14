import { useEffect, useState } from "react";
import WeeklyGraphBox from "./graphBox/weeklyLineGraphBox";
import { airQuality, param } from "@/lib/param";

export default function WeeklyAirQuality({ display, hourly, indexW, index }) {
  const [hoverIndex, setHover] = useState(index)
  const [avg, setDailyAvg] = useState([])
  const current = hourly[hoverIndex]
  const validIndex = hoverIndex - indexW * 24 >= 0 && hoverIndex - indexW * 24 < 25
  const maxVal = Math.max(160, param.max(hourly))

  useEffect(() => {
    const result = []

    for (let i = 0; i < hourly.length; i += 24) {
      const chunk = hourly.slice(i, i + 24)
      const sum = chunk.reduce((a, b) => a + b, 0)
      result.push(Math.round(sum / chunk.length))
    }
    setDailyAvg(result)
  }, [])

  useEffect(() => {
    setHover(index)
  }, [indexW])

  return (
    <div className="w-full pb-4">
      <div className="pt-4 sm:pt-8">
        {
          validIndex ? <span>{hoverIndex - indexW * 24}:00</span> : <span>Average</span>
        }

        <div className="text-2xl flex gap-2">
          {
            validIndex ?
              <>
                <span className="font-bold">{airQuality(current).state}</span>
                <span>{current}</span>
              </>
              :
              <>
                <span className="font-bold">{airQuality(avg[indexW]).state}</span>
                <span>{avg[indexW]}</span>
              </>
          }
        </div>
      </div>

      <WeeklyGraphBox
        display={display} unit={'index'} min={0} max={maxVal} step={maxVal * 0.2}
        hourly={hourly} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover}
      />
    </div>
  )
}
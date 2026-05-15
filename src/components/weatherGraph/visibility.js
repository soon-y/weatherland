import { useEffect, useState } from "react";
import WeeklyGraphBox from "./graphBox/weeklyLineGraphBox";
import { param, visibilityInfo } from "@/lib/param";

export default function WeeklyVisibility({ display, hourly, indexW, index }) {
  const [hoverIndex, setHover] = useState(index)
  const [avg, setDailyAvg] = useState([])
  const current = hourly[hoverIndex]
  const validIndex = hoverIndex - indexW * 24 >= 0 && hoverIndex - indexW * 24 < 25
  const maxVal = Math.max(50000, param.max(hourly))
  const unit = 'km'

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
    <div className="w-full max-h-30 py-8">
            <div className="pt-8 pb-4">
      {
        validIndex ? <span>{hoverIndex - indexW * 24}:00</span> : <span>Average</span>
      }

      <div className="text-2xl flex gap-2 justify-between">
        {
          validIndex ?
            <>
              <span className="font-bold">{visibilityInfo(Math.floor(current / 1000)).state}</span>
              <span>{current / 1000}<span className="text-lg"> {unit}</span></span>
            </>
            :
            <>
              <span className="font-bold">{visibilityInfo(Math.floor(avg[indexW] / 1000)).state}</span>
              <span>{avg[indexW] / 1000}<span className="text-lg"> {unit}</span></span>
            </>
        }
      </div>
      </div>

      <WeeklyGraphBox
        display={display} unit={'m'} min={0} max={maxVal} step={maxVal*0.2}
        hourly={hourly} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover}
      />
    </div>
  )
}
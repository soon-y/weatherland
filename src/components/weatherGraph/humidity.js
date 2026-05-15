import { useEffect, useState } from "react";
import WeeklyGraphBox from "./graphBox/weeklyLineGraphBox";
import { param } from "@/lib/param";

export default function WeeklyHumidity({ humidity, indexW, index, dewPoint, temp }) {
  const [hoverIndex, setHover] = useState(index)
  const [avg, setDailyAvg] = useState([])
  const current = humidity[hoverIndex]
  const validIndex = hoverIndex - indexW * 24 >= 0 && hoverIndex - indexW * 24 < 25
  const minVal = Math.min(param.minInTwo(dewPoint, temp))
  const maxVal = Math.max(param.maxInTwo(dewPoint, temp))
  let unit = '%'

  useEffect(() => {
    const result = []

    for (let i = 0; i < humidity.length; i += 24) {
      const chunk = humidity.slice(i, i + 24)
      const sum = chunk.reduce((a, b) => a + b, 0)
      result.push(Math.round(sum / chunk.length))
    }
    setDailyAvg(result)
  }, [])

  useEffect(() => {
    setHover(index)
  }, [indexW])

  return (
    <div className="w-full">
      <div className="pt-8">
        <div className="flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <span>{hoverIndex - indexW * 24}:00</span>
                <span>Dew point / <span className="text-gray-400">Temperature</span></span>
              </>
              :
              <span>Average</span>
          }
        </div>

        <div className="text-2xl flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <div>
                  <span>{current}{unit}</span>
                </div>

                <p>
                  {dewPoint[hoverIndex]} <span className="text-lg">°C</span> /
                  <span className="text-gray-400"> {temp[hoverIndex]}
                    <span className="text-lg"> °C</span>
                  </span>
                </p>
              </>
              :
              <>
                <span>{avg[indexW]}{unit}</span>
              </>
          }
        </div>
      </div>

      <WeeklyGraphBox ratio={2} graphRatio={2}
        display={'temperature'} unit={unit} min={0} max={100} step={20}
        hourly={humidity} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover}
      />

      <WeeklyGraphBox ratio={2} graphRatio={2}
        display={'temperature'} unit={'°C'} min={minVal} max={maxVal} step={5} hourly2={temp}
        hourly={dewPoint} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover}
      />
    </div>
  )
}
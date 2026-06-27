import { useEffect, useState } from "react";
import WeeklyGraphBox from "./graphBox/weeklyLineGraphBox";
import { param, uvIndex } from "@/lib/param";

export default function WeeklyUVindex({ display, hourly, indexW, index, daily1 }) {
  const [hoverIndex, setHover] = useState(index)
  const current = hourly[hoverIndex]
  const validIndex = hoverIndex - indexW * 24 >= 0 && hoverIndex - indexW * 24 < 25
  const maxVal = Math.max(16, param.max(daily1))

  useEffect(() => {
    setHover(index)
  }, [indexW])

  return (
    <div className="w-full pb-4">
      <div className="pt-4 sm:pt-8">
        {
          validIndex ?
            <span>{hoverIndex - indexW * 24}:00</span> :
            indexW < 5 ?
              <span>Average</span> :
              <div>UV Index forecast</div>
        }

        <div className="text-2xl flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <span className="font-bold">{uvIndex(current).state}</span>
                <span>{current}</span>
              </>
              :
              indexW < 5 ?
                <>
                  <span className="font-bold">{uvIndex(daily1[indexW]).state}</span>
                  <span>{daily1[indexW]}</span>
                </>
                :
                <>
                  <span>available for 5 days</span>
                </>
          }
        </div>
      </div>

      <WeeklyGraphBox
        display={display} unit={'index'} min={0} max={maxVal} step={4} daily1={daily1}
        hourly={hourly} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover}
      />
    </div>
  )
}
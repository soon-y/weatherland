import { useEffect, useState } from "react";
import WeeklyGraphBox from "./graphBox/weeklyLineGraphBox";
import { getWindLevel, param } from "@/lib/param";

export default function WeeklyWind({ display, wind, indexW, index, gusts, windDaily, gustsDaily, code }) {
  const [hoverIndex, setHover] = useState(index)
  const current = wind[hoverIndex]
  const validIndex = hoverIndex - indexW * 24 >= 0 && hoverIndex - indexW * 24 < 25
  const maxVal = Math.max(100, param.maxInTwo(wind, gusts))
  let unit = 'km/h'

  useEffect(() => {
    setHover(index)
  }, [indexW])

  return (
    <div className="w-full">
      <div className="pt-8 pb-4">
        <div className="flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <span>{hoverIndex - indexW * 24}:00</span>
                <span className="text-gray-400">Gusts</span>
              </>
              :
              <>
                <span>Max</span>
                <span className="text-gray-400">Gusts Max</span>
              </>
          }
        </div>

        <div className="text-2xl flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <div className="flex gap-2 items-end">
                  {current} <span className="text-base"> {unit}</span>
                  <span className="text-lg">{getWindLevel(current)}</span>
                </div>

                <div className="flex gap-2 text-lg text-gray-400 items-end">
                  {gusts[hoverIndex]}
                  <span className="text-base"> {unit}</span>
                  {getWindLevel(gusts[hoverIndex])}
                </div>
              </>
              :
              <>
                <div className="flex gap-2 items-end">
                  {windDaily[indexW]} <span className="text-base"> {unit}</span>
                  <span className="text-lg">{getWindLevel(windDaily[indexW])}</span>
                </div>

                <div className="flex gap-2 text-lg text-gray-400 items-end">
                  {gustsDaily[indexW]}
                  <span className="text-base"> {unit}</span>
                  {getWindLevel(gustsDaily[indexW])}
                </div>
              </>
          }
        </div>
      </div>
      <WeeklyGraphBox
        display={display} unit={unit} min={0} max={maxVal} step={maxVal * 0.1} hourly2={gusts} daily1={windDaily} daily2={gustsDaily}
        hourly={wind} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover} code={code}
      />
    </div>
  )
}
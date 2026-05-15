import { useEffect, useState } from "react"
import { param, precipIntensity, weatherInfo } from "@/lib/param"
import WeeklyBarGraphBox from "./graphBox/weeklyBarGraphBox"
import WeeklyLineGraphBox from "./graphBox/weeklyLineGraphBox"

export default function WeeklyPrecipitation({ display, hourProbability, hourPrecipitation, indexW, index, dailyMean, dailySum, code }) {
  const [hoverIndex, setHover] = useState(index)
  const [type, setType] = useState('')
  const probability = hourProbability[hoverIndex]
  const precipitation = hourPrecipitation[hoverIndex]
  const probabilityMean = dailyMean[indexW]
  const totalSum = dailySum[indexW]
  const validIndex = hoverIndex - indexW * 24 >= 0 && hoverIndex - indexW * 24 < 25
  const maxVal = param.max(hourPrecipitation)
  let unit = 'mm'

  useEffect(() => {
    setHover(index)

    let weatherType = weatherInfo(code[indexW]).type
    let type =
      weatherType.includes('snow') ? 'snow' :
        weatherType.includes('shower') ? 'shower' :
          weatherType.includes('drizzle') ? 'drizzle' :
            'rain'

    setType(type)
  }, [indexW])

  return (
    <div className="w-full">
      <div className="pt-8">
        <div className="flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <span>{hoverIndex - indexW * 24}:00</span>
                {precipitation > 0 && <span className="capitalize">{type}</span>}
              </>
              :
              <>
                <span>Probability mean</span>
                <span>Total</span>
              </>
          }
        </div>

        <div className="text-2xl flex gap-2 justify-between">
          {
            validIndex ?
              <>
                <div>
                  {probability} <span className="text-base">%</span>
                </div>

                {
                  <div>
                    <span className="capitalize text-lg">{precipIntensity(type, precipitation)} </span>
                    {precipitation > 0 && <>{precipitation} <span className="text-base"> {unit}</span></>
                    }
                  </div>
                }
              </>
              :
              <>
                <div>
                  {probabilityMean} <span className="text-base">%</span>
                </div>

                <div>
                  {totalSum}<span className="text-base"> {unit}</span>
                </div>
              </>
          }
        </div>
      </div>
      <WeeklyLineGraphBox ratio={2} graphRatio={2}
        display={'probability'} unit={'%'} min={0} max={100} step={20}
        hourly={hourProbability} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover}
      />

      <WeeklyBarGraphBox ratio={2}
        display={display} unit={unit} min={0} max={maxVal} step={maxVal * 0.2}
        hourly={hourPrecipitation} indexW={indexW} index={index} hoverIndex={hoverIndex} setHover={setHover}
      />
    </div>
  )
}
import { useEffect, useState } from "react"
import Box from "./box"
import { param, tempColorIndex, tempColorList } from "@/lib/param"
import WeatherIcon from "../weatherIcon"
import BoxTitle from "./boxTitle"

export default function Forecast({ daily, hourly, index, indexD, setDisplay, setBoxClicked }) {
  const today = new Date()
  const [weekly, setWeedkly] = useState([])

  useEffect(() => {
    const weeklyArr = []
    for (let i = 0; i < 7; i++) {
      weeklyArr.push({
        day: i === 0 ? 'Today' : param.days[(today.getDay() + i) % 7],
        code: daily.weather_code[i],
        min: daily.temperature_2m_min[i],
        max: daily.temperature_2m_max[i],
        sunrise: daily.sunrise[i],
        sunset: daily.sunset[i],
        probability: daily.precipitation_probability_mean[i],
      })
      setWeedkly(weeklyArr)
    }
  }, [daily])

  const barRange = (min, max) => {
    const globalMin = Math.min(...daily.temperature_2m_min)
    const globalMax = Math.max(...daily.temperature_2m_max)
    const range = globalMax - globalMin
    const left = ((min - globalMin) / range) * 100
    const width = ((max - min) / range) * 100
    const minIndex = tempColorIndex(min)
    const maxIndex = tempColorIndex(max)
    let bgColor = ''

    for (let i = minIndex; i <= maxIndex; i++) {
      bgColor += tempColorList[i] + ','
    }

    return {
      left: `${left}%`,
      width: `${width}%`,
      background: `linear-gradient(to right, ${bgColor.replace(/,$/, '')})`
    }
  }

  const currentTemp = () => {
    const globalMin = Math.min(...daily.temperature_2m_min)
    const globalMax = Math.max(...daily.temperature_2m_max)
    const range = globalMax - globalMin
    const left = ((hourly.temperature_2m[index] - globalMin) / range) * 97

    return {
      left: `${left}%`,
    }
  }

  return (
    <Box style={'forecast'}>
      <BoxTitle title={'7-day forecast'} />
      <div className='grid gap-2 mb-1'>
        {weekly.map((el, i) => (
          <div key={i} className='grid grid-cols-7 sm:grid-cols-8 items-center justify-center h-9' onClick={() => {
            setDisplay(i)
            setBoxClicked(true)
          }}>
            <p className={`col-span-1 text-sm sm:text-base ${i == indexD && 'font-bold'}`}>{el.day}</p>
            <div className='flex justify-center items-center'>
              <WeatherIcon code={el.code} probability={el.probability} />
            </div>
            <p className={`col-span-1 text-sm sm:text-base text-center ${i == indexD && 'font-bold'}`}>{el.min}°</p>
            <div className={`col-span-3 sm:col-span-4 relative h-2 rounded-full overflow-hidden ${i == indexD ? 'bg-black/40' : 'bg-black/20'}`}>
              <div
                className="absolute inset-0 rounded-full"
                style={barRange(el.min, el.max)}
              />
              {i == indexD &&
                <div
                  className="absolute rounded-full h-2 outline-2 outline-black/70 aspect-square shadow-sm bg-white"
                  style={currentTemp()}
                />
              }
            </div>
            <p className={`col-span-1 text-sm sm:text-base text-center ${i == indexD && 'font-bold'}`}>{el.max}°</p>
          </div>
        ))}
      </div>
    </Box>
  )
}
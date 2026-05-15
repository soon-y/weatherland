import { param } from "@/lib/param"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import WeeklyAirQuality from "./airQuality"
import WeeklyVisibility from "./visibility"
import WeeklyHumidity from "./humidity"
import WeeklyPressure from "./pressure"
import WeeklyUVindex from "./uvIndex"
import WeeklyWind from "./wind"
import WeeklyTemperature from "./temperature"
import WeeklyPrecipitation from "./precipitation"
import DailySun from "./dailySun"
import BoxTitle from "../weatherBox/boxTitle"
import DailyMoon from "./dailyMoon"

export default function WeeklyBox({ boxClicked, setBoxClicked, display, setDisplay, daily, hourly, air, moon, index, indexD }) {
  const isNumber = display != null && Number.isFinite(Number(display))
  const [weekly, setWeekly] = useState([])
  const [indexW, setIndexW] = useState(isNumber ? Number(display) : indexD)
  const today = new Date()

  useEffect(() => {
    const weeklyArr = []

    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(today.getDate() + i)

      weeklyArr.push({
        day: param.daysShort[date.getDay()],
        date: date.getDate()
      })
    }

    setWeekly(weeklyArr)
  }, [])

  useEffect(() => {
    setIndexW(isNumber ? Number(display) : indexD)
  }, [display])

  return (
    <div className={`${param.weatherBoxheight} ${param.weatherBoxStyles} px-4 duration-500 ease-in-out ${boxClicked ? 'top-18 opacity-100' : 'top-[100%] opacity-0'}`}>
      <div className={`h-full w-full rounded-t-xl backdrop-blur-2xl bg-black/80 overflow-y-scroll select-none`}>
        <div className="py-6 px-8 sm:px-16">
          <div className="mb-4 flex justify-center">
            <BoxTitle title={isNumber ? 'temperature' : display} />
          </div>

          <div className="grid grid-cols-7 gap-2 sm:gap-4">
            {weekly.map((el, i) => (
              <div key={i} onClick={() => setIndexW(i)} className="cursor-pointer">
                <p className="flex items-center justify-center mb-2">{el.day}</p>
                <p className={`flex items-center justify-center aspect-square outline outline-white/50 rounded-full duration-500 
                ${i == indexW && 'font-bold bg-white/80 text-black'}`
                }>
                  {el.date}
                </p>
              </div>
            ))}
          </div>

          {display === 'air quality' &&
            <WeeklyAirQuality display={display} hourly={air.european_aqi} indexW={indexW} index={index} />
          }
          {display === 'visibility' && <WeeklyVisibility display={display} hourly={hourly.visibility} indexW={indexW} index={index} />
          }
          {display === 'humidity' &&
            <WeeklyHumidity humidity={hourly.relative_humidity_2m} indexW={indexW} index={index} dewPoint={hourly.dew_point_2m} temp={hourly.temperature_2m} />
          }
          {display === 'pressure' &&
            <WeeklyPressure display={display} hourly={hourly.pressure_msl} indexW={indexW} index={index} />
          }
          {display === 'uv index' &&
            <WeeklyUVindex display={display} hourly={air.uv_index} indexW={indexW} index={index} daily1={daily.uv_index_max} />
          }
          {display === 'wind' &&
            <WeeklyWind display={display} wind={hourly.wind_speed_10m} indexW={indexW} index={index} gusts={hourly.wind_gusts_10m}
              windDaily={daily.wind_speed_10m_max} gustsDaily={daily.wind_gusts_10m_max} code={hourly.wind_direction_10m} />
          }
          {display === 'feels like' &&
            <WeeklyTemperature display={'feels like'} hourly={hourly.apparent_temperature} indexW={indexW} index={index} hourly2={hourly.temperature_2m}
              daily1={daily.apparent_temperature_min} daily2={daily.apparent_temperature_max} code={hourly.weather_code} isDay={hourly.is_day} />
          }
          {isNumber &&
            <WeeklyTemperature display={'temperature'} hourly={hourly.temperature_2m} indexW={indexW} index={index} hourly2={hourly.apparent_temperature}
              daily1={daily.temperature_2m_min} daily2={daily.temperature_2m_max} code={hourly.weather_code} isDay={hourly.is_day} />
          }
          {display === 'precipitation' &&
            <WeeklyPrecipitation display={'precipitation'} hourProbability={hourly.precipitation_probability} indexW={indexW} index={index} hourPrecipitation={hourly.precipitation}
              dailyMean={daily.precipitation_probability_mean} dailySum={daily.precipitation_sum} code={hourly.weather_code} />
          }

          {display === 'daily sun' &&
            <DailySun display={display} indexW={indexW} setIndexW={setIndexW} sunrise={daily.sunrise} sunset={daily.sunset} daylight={daily.daylight_duration} />
          }

          {typeof display === 'string' && (display.includes('moon') && <DailyMoon indexW={indexW} moon={moon} />)}
        </div>
      </div>

      <button onClick={() => {
        setBoxClicked(false)
        setTimeout(() => {
          setDisplay(null)
          setIndexW(indexD)
        }, 300)
      }}
        className='absolute right-5 bottom-5 text-white p-3 bg-black/50 outline outline-black rounded-full cursor-pointer'><X />
      </button>
    </div>
  )
}
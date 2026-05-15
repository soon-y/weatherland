"use client"

import { useState, useEffect } from 'react'
import { airQuality, getWindDirectionArrow, uvIndex, visibilityInfo } from '@/lib/param'
import WeatherDetails from './weatherDetails'
import WeatherIcon from './weatherIcon'
import InfoBox from './weatherInfoBox'

export default function WeatherInfo({ hourly, daily, air, moon, index, clicked }) {
  const [open, setOpen] = useState(false)
  const [indexD, setIndexD] = useState(0)
  const uv = air.uv_index[index]
  const windSpeed = hourly.wind_speed_10m[index]
  const rain = hourly.precipitation_probability
  const airIndex = air.european_aqi[index]
  const visibility = hourly.visibility[index]
  const sunriseToday = daily.sunrise[indexD]
  const sunriseNext = indexD === 6 ? daily.sunrise[indexD] : daily.sunrise[indexD + 1]
  const sunsetToday = daily.sunset[indexD]
  const sunriseTimeToday = new Date(sunriseToday)
  const sunsetTimeToday = new Date(sunsetToday)
  const currentHour = String(index % 24).padStart(2, '0')
  const now = new Date(daily.time[indexD] + 'T' + currentHour + ':00')
  const time = index >= 24 ? index % 24 : index
  const isDay = hourly.is_day[index]

  useEffect(() => {
    const tempIndex = daily.time.findIndex(el => el === hourly.time[index].split("T")[0])
    setIndexD(tempIndex)
  }, [index])

  return (
    <div>
      <div
        className={`text-white duration-400 ease-in-out backdrop-blur-xl fixed left-0 bg-black/60 overflow-hidden
        ${open ? "w-[100vw] h-[100vh]" : "w-0 h-0"}
      `}>
        <WeatherDetails
          open={open} hourly={hourly} daily={daily} air={air} moon={moon}
          index={index} indexD={indexD} setOpen={setOpen} clicked={clicked}
        />
      </div>

      <div onClick={() => {
        setOpen(true)
        clicked(true)
      }}
        className={`fixed top-0 p-4 select-none grid text-white font-semibold cursor-pointer gap-1`}>
        <div className={`flex gap-2 items-center h-8 duration-500 
          ${isDay && !open ? 'text-black' : 'text-white'}`}
        >
          <p className='font-bold text-xl flex gap-2'>{
            new Date(hourly.time[index]).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short"
            }).replace(",", "")}
          </p>
          <div className=''>
            {!open ?
              <WeatherIcon code={daily.weather_code[indexD]} isDay={isDay} background={0} />
              :
              <span className='text-xl'>{String(time).padStart(2, "0")}:00</span>
            }
          </div>
        </div>

        <div className={`grid gap-1 duration-500 
          ${!open ? 'opacity-100' : 'opacity-0'} 
          ${isDay ? 'text-black' : 'text-white'}`}
        >
          <InfoBox isDay={isDay}
            info1={'L: ' + daily.temperature_2m_min[indexD]} unit1={'°C'}
            info2={'H: ' + daily.temperature_2m_max[indexD]} unit2={'°C'}
          />

          <InfoBox title={'temperature'} isDay={isDay}
            info1={hourly.temperature_2m[index]} unit1={'°C'}
            info2={'feels like ' + hourly.apparent_temperature[index]} unit2={'°C'}
          />

          <InfoBox title={'precipitation'} isDay={isDay}
            info1={rain[index]} unit1={'%'}
            info2={hourly.precipitation[index]} unit2={'mm'}
            condition={rain[index] > 0}
          />
          <InfoBox title={'wind'} isDay={isDay}
            info1={windSpeed} unit1={'km/h'}
            info2={getWindDirectionArrow(hourly.wind_direction_10m[index])}
            condition={windSpeed > 15}
          />
          <InfoBox title={'uv index'} isDay={isDay}
            info1={uvIndex(uv).state}
            info2={uv}
            condition={uv > 3}
          />
          <InfoBox title={'air quality'} isDay={isDay}
            info1={airQuality(airIndex).state}
            info2={airIndex}
            condition={airIndex > 50}
          />
          <InfoBox title={'visibility'} isDay={isDay}
            info1={visibilityInfo(visibility).state}
            info2={Math.round(visibility / 1000)} unit2={'km'}
            condition={visibility < 2}
          />
          <InfoBox title={'sunrise'} isDay={isDay}
            info1={sunriseToday.split('T')[1]}
            condition={now < sunriseTimeToday}
          />

          <InfoBox title={'sunset'} isDay={isDay}
            info1={sunsetToday.split('T')[1]}
            condition={sunriseTimeToday <= now && now < sunsetTimeToday}
          />

          <InfoBox title={'sunrise'} isDay={isDay}
            info1={sunriseNext.split('T')[1]}
            condition={sunsetTimeToday <= now}
          />
        </div>
      </div>
    </div>
  )
}

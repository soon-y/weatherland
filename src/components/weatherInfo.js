"use client"

import { useState, useEffect } from 'react'
import { airQuality, getWindDirectionArrow, uvIndex, visibilityInfo, tempColorIndex, tempColorList } from '@/lib/param'
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


  const barRange = (min, max) => {
    const globalMin = min
    const globalMax = max
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
    const range = daily.temperature_2m_max[indexD] - daily.temperature_2m_min[indexD]
    const left = ((hourly.temperature_2m[index] - daily.temperature_2m_min[indexD]) / range) * 90

    return {
      left: `${left}%`, transition: 'left 1s ease'
    }
  }

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
        className={`
          fixed top-0 m-4 px-4 py-2 select-none grid text-white font-semibold cursor-pointer gap-1 rounded-xl duration-200
          ${open ? "bg-white/0" : "bg-black/15 backdrop-blur-xl"}
        `}>
        <div className={`flex gap-2 items-center h-8 mb-2 duration-500 ${!open && 'justify-between'}
          ${isDay && !open ? 'text-black' : 'text-white'}`}
        >
          <p className='font-bold text-xl flex gap-2'>{
            new Date(hourly.time[index]).toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short"
            }).replace(",", "")}
          </p>
          <div>
            {!open ?
              <WeatherIcon code={daily.weather_code[indexD]} probability={null} isDay={isDay} background={false} />
              :
              <span className='text-xl'>{String(time).padStart(2, "0")}:00</span>
            }
          </div>
        </div>

        <div className={`grid gap-1 duration-500 
          ${!open ? 'opacity-100' : 'opacity-0'} 
          ${isDay ? 'text-black' : 'text-white'}`}
        >
          <div className='grid grid-cols-[40px_1fr_40px] items-center justify-center'>
            <p>{daily.temperature_2m_min[indexD]}°</p>
            <div className={`relative h-2 rounded-full`}>
              <div
                className="absolute inset-0 rounded-full"
                style={barRange(daily.temperature_2m_min[indexD], daily.temperature_2m_max[indexD])}
              />
              <div
                className="absolute rounded-full h-2 aspect-square shadow-sm bg-white"
                style={currentTemp()}
              />
            </div>
            <p className='text-right'>{daily.temperature_2m_max[indexD]}°</p>
          </div>


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

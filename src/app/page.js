"use client"

import { useState, useEffect } from 'react'
import World from '@/components/World/World'
import Slider from '@/components/Slider'
import { fetchOpenMeteo } from '@/app/api/weather/fetchOpenMeteo'
import InputArea from '@/components/InputLocation'
import WeatherInfo from '@/components/weatherInfo'
import { fetchAstronomy } from './api/weather/fetchAstronomy'
import { param } from '@/lib/param'

export default function Home() {
  const [dailyData, setDailyData] = useState(null)
  const [hourlyData, setHourlyData] = useState(null)
  const [airData, setAirData] = useState(null)
  const [moonData, setMoonData] = useState(null)
  const [{ lat, lon, timezone, offset }, setGeolocation] = useState({ lat: 53, lon: 10, timezone: null, offset: null })
  const [index, setIndex] = useState(null)
  const [infoClicked, setInfoClicked] = useState(false)

  useEffect(() => {
    if (!(lat && lon && timezone)) return

    const fetchInfo = async () => {
      try {
        const data = await fetchOpenMeteo(lat, lon, timezone)
        const moon = await fetchAstronomy(lat, lon, offset)
        if (data) {
          if (data.airQuality !== null) setAirData(data.airQuality.hourly)
          if (data.hourly !== null) setHourlyData(data.hourly.hourly)
          if (data.daily !== null) setDailyData(data.daily.daily)
        }
        if (moon) setMoonData(moon.results)
      } catch (err) {
        console.log(err)
      }
    }
    fetchInfo()
  }, [lat, lon, timezone, offset])

  return (
    <div className='w-screen h-dvh overflow-hidden'>
      <World hourly={hourlyData} daily={dailyData} index={index} />

      <div className='fixed bottom-0 w-full p-2'>
        {hourlyData ?
          <Slider hourly={hourlyData} setIndex={setIndex} index={index} timezone={timezone}/>
          :
          <div className={`${param.sliderStyles} animate-pulse opacity-40`} style={{ height: param.sliderHeight + 'px' }}>
          </div>
        }
      </div>

      <div className='fixed top-0'>
        {(index != null && isFinite(index) && airData && hourlyData && dailyData) ?
          <WeatherInfo hourly={hourlyData} daily={dailyData} air={airData} moon={moonData} index={index} clicked={setInfoClicked} />
          :
          <div className={`m-2 animate-pulse w-36 h-36 rounded-xl bg-black/20`}></div>
        }
      </div>

      {<div className='fixed top-0 right-0'>
        <InputArea setGeolocation={setGeolocation} hide={!infoClicked} />
      </div>}
    </div>
  )
}
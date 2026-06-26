"use client"

import { param } from '@/lib/param'
import { useState } from 'react'
import { X } from 'lucide-react'
import Forecast from './weatherBox/forecast'
import FeelsLike from './weatherBox/feelsLike'
import Precipitation from './weatherBox/precipitation'
import UVindex from './weatherBox/uv'
import Sunrise from './weatherBox/sunrise'
import AirQuality from './weatherBox/airQuality'
import Visibility from './weatherBox/visibility'
import Wind from './weatherBox/wind'
import Humidity from './weatherBox/humidity'
import Pressure from './weatherBox/pressure'
import Moon from './weatherBox/moon'
import WeeklyBox from './weatherGraph/weeklyBox'

export default function WeatherDetails({ open, hourly, daily, air, moon, index, indexD, setOpen, clicked }) {
  const [display, setDisplay] = useState(null)
  const [boxClicked, setBoxClicked] = useState(false)

  return (
    <div className='relative w-dvw h-dvh'>
      <div className={`scrollbar-hide ${param.weatherBoxheight} ${param.weatherBoxStyles} ${open ? 'opacity-100' : 'opacity-0'}
        flex flex-wrap content-start items-start overflow-scroll gap-3 p-2 pt-[1px] sm:p-4 pb-12 duration-500
        `}>
        <Forecast daily={daily} hourly={hourly} index={index} indexD={indexD} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <FeelsLike hourly={hourly} index={index} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <Precipitation daily={daily} hourly={hourly} index={index} indexD={indexD} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <UVindex daily={daily} air={air} index={index} indexD={indexD} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <Sunrise daily={daily} hourly={hourly} index={index} indexD={indexD} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <AirQuality air={air} index={index} setDisplay={setDisplay} setBoxClicked={setBoxClicked} indexD={indexD} />
        <Visibility hourly={hourly} index={index} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <Wind hourly={hourly} index={index} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <Humidity hourly={hourly} index={index} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <Pressure hourly={hourly} index={index} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
        <Moon daily={moon} indexD={indexD} setDisplay={setDisplay} setBoxClicked={setBoxClicked} />
      </div>

      {open && 
        <button onClick={() => {
          setOpen(false)
          clicked(false)
        }}
          className='absolute right-3 bottom-3 text-white p-2 bg-black/50 outline outline-black rounded-full cursor-pointer'><X />
        </button>}

      <WeeklyBox
        boxClicked={boxClicked} setBoxClicked={setBoxClicked}
        display={display} setDisplay={setDisplay} index={index} indexD={indexD}
        daily={daily} hourly={hourly} air={air} moon={moon}
      />
    </div>
  )
}
import Box from "./box"
import { getWindDirection, getWindLevel } from "@/lib/param"
import Image from "next/image"
import BoxTitle from "./boxTitle"

export default function Wind({ hourly, index, setDisplay, setBoxClicked }) {
  const wind = hourly.wind_speed_10m[index]
  const gusts = hourly.wind_gusts_10m[index]
  const angle = hourly.wind_direction_10m[index]
  const title = 'wind'

  return (
    <Box style={'wide'} setDisplay={setDisplay} title={title} setBoxClicked={setBoxClicked}>
      <BoxTitle title={title} />

      <div className='grid grid-cols-[58%_40%_2%]'>
        <div className="grid items-center">
          <p className="text-xl font-bold">{getWindLevel(wind)}</p> <p />
          <div className='grid grid-cols-[90px_1fr] items-center '>
            <p className="font-semibold">Wind</p>
            <p className="flex gap-2">{wind}km/h</p>
            <p className="font-semibold">Gusts</p>
            <p>{gusts}km/h</p>
            <p className="font-semibold">Direction</p>
            <p>{getWindDirection(angle)}</p>
          </div>
        </div>

        <div className='relative aspect-square'>
          <p className="absolute opacity-80 font-bold left-1/2 top-[-3px] -translate-x-1/2">N</p>
          <p className="absolute opacity-80 font-bold right-1/2 bottom-[-4px] translate-x-1/2">S</p>
          <p className="absolute opacity-80 font-bold bottom-1/2 right-1 translate-y-1/2">E</p>
          <p className="absolute opacity-80 font-bold top-1/2 -translate-y-1/2">W</p>
          <div className="text-center leading-none absolute left-1/2 top-1/2 -translate-1/2">
            <p className="font-semibold text-2xl/6">{wind}</p>
            <p className="text-sm">km/h</p>
          </div>
          <Image className="absolute opacity-20" src={'/weather/wind/compass.png'} width={400} height={400} alt="compass" />
          <Image className="absolute opacity-90" style={{ rotate: angle + 90 + 'deg' }} src={'/weather/wind/arrow.png'} width={400} height={400} alt="arrow" />
        </div>
      </div>
    </Box>
  )
}
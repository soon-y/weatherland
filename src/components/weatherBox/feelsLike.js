import Box from "./box"
import { param } from "@/lib/param"
import BoxTitle from "./boxTitle"

export default function FeelsLike({ hourly, index, setDisplay, setBoxClicked }) {
  const feelsLike = hourly.apparent_temperature[index]
  const title = 'feels like'

  const feelsLikeRange = () => {
    const diff = (feelsLike - hourly.temperature_2m[index]).toFixed(1)
    const tempSign = diff < 0 ? '\u2193' : '\u2191'
    let text, tempPos, barWidth = null

    if (Math.abs(diff) <= 1) text = 'Similar to the actual temperature.'
    else if (diff < 0) {
      if (feelsLike < 0) text = 'It feels colder than the actual temperature.'
      else text = 'It feels cooler than the actual temperature.'
    }
    else {
      if (feelsLike <= 25) text = 'It feels warmer than the actual temperature.'
      else text = 'It feels hotter than the actual temperature.'
    }

    if (Math.abs(diff) <= 4) {
      barWidth = 22
      if (diff < 0) tempPos = 'right-[20%]'
      else tempPos = 'left-[20%]'
    } else if (Math.abs(diff) <= 7) {
      barWidth = 42
      if (diff < 0) tempPos = 'right-[40%]'
      else tempPos = 'left-[40%] '
    } else {
      barWidth = 77
      if (diff < 0) tempPos = 'left-0'
      else tempPos = 'right-0'
    }

    return (
      Math.abs(diff) > 2 ?
        <div className={`${param.weatherBarContainer} border-white/50 ${diff < 0 ? 'border-r-3' : 'border-l-3'}`}>
          <div className={`${param.weatherBar} ${diff < 0 ? 'rounded-l-full' : 'rounded-r-full'}`}>
            <div className={`absolute w-full h-2 ${diff < 0 ? 'right-0 bg-gradient-to-r from-cyan-400 to-cyan-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`} style={{ width: `${barWidth}%`, }} />
          </div>
          <span className={`absolute py-1 px-2 rounded-2xl text-sm ${tempPos} ${diff < 0 ? 'bg-cyan-400 ' : 'bg-orange-600'}`}>
            {tempSign} {Math.abs(diff)}°
          </span>
        </div> :
        <p className={param.weatherDesc}>
          {text}
        </p>
    )
  }

  return (
    <Box style={'square'} setDisplay={setDisplay} title={title} setBoxClicked={setBoxClicked}>
      <div>
        <BoxTitle title={title} />
        <p className='text-2xl font-semibold'>{feelsLike}°</p>
        <p className='text-lg'>Actual: {hourly.temperature_2m[index]}°</p>
      </div>
      {feelsLikeRange()}
    </Box>
  )
}
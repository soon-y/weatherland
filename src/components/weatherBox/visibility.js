import Box from "./box"
import { visibilityInfo, param } from "@/lib/param"
import BoxTitle from "./boxTitle"

export default function Visibility({ hourly, index, setDisplay, setBoxClicked }) {
  const current = Math.floor((hourly.visibility[index]) / 1000)
  const title = 'visibility'

  return (
    <Box style={'square'} setDisplay={setDisplay} title={title} setBoxClicked={setBoxClicked}>
      <div>
        <BoxTitle title={title} />
        <p className='font-bold text-2xl'>{current}km</p>
      </div>

      <div>
        <p className={`${param.weatherDesc}`}>
          {visibilityInfo(current).desc}
        </p>
      </div>
    </Box>
  )
}
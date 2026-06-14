import Box from "./box"
import { visibilityInfo, param } from "@/lib/param"
import BoxTitle from "./boxTitle"

export default function Visibility({ hourly, index, setDisplay, setBoxClicked }) {
  const visibility = hourly.visibility[index] / 1000
  const current = visibility < 10 ? visibility : Math.round(visibility)
  const title = 'visibility'

  return (
    <Box style={'square'} setDisplay={setDisplay} title={title} setBoxClicked={setBoxClicked}>
      <div>
        <BoxTitle title={title} />
        <p className={param.weatherDescMain}>{current}km</p>
      </div>

      <div>
        <p className={`${param.weatherDesc}`}>
          {visibilityInfo(current).desc}
        </p>
      </div>
    </Box>
  )
}
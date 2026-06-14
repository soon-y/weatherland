import Box from "./box"
import { uvIndex, param } from "@/lib/param"
import BoxTitle from "./boxTitle"

export default function UVindex({ air, index, setDisplay, setBoxClicked }) {
  const current = air.uv_index[index]
  const title = 'uv index'

  return (
    <Box style={'square'} setDisplay={setDisplay} title={title} setBoxClicked={setBoxClicked}>
      <div>
        <BoxTitle title={title} />
        <p className={param.weatherDescMain}>{uvIndex(current).state}</p>
        <p className={param.weatherDescSub}>{current}</p>
      </div>
      <div className={`${param.weatherBarContainer}`}>
        <div className={`${param.weatherBar} rounded-full bg-gradient-to-r from-lime-500 from-5% via-yellow-300 via-30% to-red-500 to-90%`} />
        <div
          className={`${param.weatherBarDisc}`}
          style={{ left: `${uvIndex(current).pos}%` }}
        />
      </div>
    </Box>
  )
}
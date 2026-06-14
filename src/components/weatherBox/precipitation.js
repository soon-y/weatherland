import Box from "./box"
import { param, weatherInfo } from "@/lib/param"
import BoxTitle from "./boxTitle"

export default function Precipitation({ daily, hourly, index, indexD, setDisplay, setBoxClicked }) {
  const code = hourly.weather_code[index]
  const totalSum = daily.precipitation_sum
  const probability = hourly.precipitation_probability[index]
  const title = 'precipitation'

  return (
    <Box style={'square'} setDisplay={setDisplay} title={title} setBoxClicked={setBoxClicked}>
      <div>
        <BoxTitle title={title} />
        <p className={param.weatherDescMain}>{probability}%</p>
        {totalSum[indexD] != 0 &&
          <p className={param.weatherDescSub}>{hourly.precipitation[index]}
            <span className="text-sm"> mm / {totalSum[indexD]} mm in total</span>
          </p>
        }
      </div>

      <div className={`${param.weatherDesc}`}>
        {weatherInfo(code).label}
      </div>
    </Box>
  )
}
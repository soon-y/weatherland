import MoonImg from "./graphBox/moonBox"

export default function DailyMoon({ indexW, moon }) {
  const moonrise = moon[indexW].moonrise
  const moonset = moon[indexW].moonset
  const nightBegin = moon[indexW].night_begin
  const nightEnd = moon[indexW].night_end
  const phaseAngle = moon[indexW].phaseData.moonphase
  const moonPhase = moon[indexW].moon_phase.replace('_', ' ')

  return (
    <div className="w-full">
      <div className="pt-8 pb-4">
        <div className="flex justify-between">
          <div className="grid grid-cols-[80px_1fr]">
            <span>Moonrise</span>
            <span>Moonset</span>
          </div>
          <span>Night</span>
        </div>

        <div className="text-2xl flex justify-between items-end">
          <div className="grid grid-cols-[80px_1fr]">
            <span>{moonrise}</span>
            <span>{moonset}</span>
          </div>

          <span className="text-xl">{nightBegin}
            <span className="text-base"> to </span>
            {nightEnd}
          </span>
        </div>

        <div className="p-12">
          <MoonImg phase={phaseAngle} />
        </div>

        <div className="flex text-xl font-bold justify-center">{moonPhase}</div>
      </div>
    </div>
  )
}
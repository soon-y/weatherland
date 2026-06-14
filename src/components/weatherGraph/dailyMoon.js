import MoonImg from "./graphBox/moonBox"

export default function DailyMoon({ indexW, moon }) {
  const moonrise = moon[indexW].moonrise
  const moonset = moon[indexW].moonset
  const phaseAngle = moon[indexW].phaseData.moonphase
  const moonPhase = moon[indexW].moon_phase.replace('_', ' ')

  return (
    <div className="w-full">
      <div className="pt-8 pb-4">
        <div className="flex justify-between">
          {!moonrise.includes('-:-') && <span>Moonrise</span>}
          {!moonset.includes('-:-') && <span>Moonset</span>}
        </div>

        <div className="text-2xl flex justify-between items-end">
          {!moonrise.includes('-:-') && <span>{moonrise}</span>}
          {!moonset.includes('-:-') && <span>{moonset}</span>}
        </div>

        <div className="p-12">
          <MoonImg phase={phaseAngle} />
        </div>

        <div className="flex text-xl font-bold justify-center">{moonPhase}</div>
      </div>
    </div>
  )
}
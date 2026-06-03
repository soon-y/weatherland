import { tempColorList, weatherIcon, weatherInfo } from "@/lib/param";

export default function WeatherIcon({ code, isDay = 1, probability, background = true}) {
  const type = weatherInfo(code, isDay).type.toLowerCase()

  const isRainy = [
    'rain', 'drizzle', 'thunder', 'snow', 'thunderstorm'
  ].some(keyword => type.includes(keyword))

  return (
    <>
      <div className={`relative flex items-center`} style={{ aspectRatio: 0.75 }}>
        {weatherIcon(code, background)}
        {isRainy && probability &&
          <div className="w-full h-full absolute top-0 flex justify-center leading-none items-end font-bold text-xs"
            style={{ color: !background && isDay? 'black': tempColorList[0] }}>
            {probability}%
          </div>
        }
      </div>
    </>
  )
}
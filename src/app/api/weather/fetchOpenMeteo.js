export async function fetchOpenMeteo(latitude, longitude, timezone) {
  const baseWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&`
  const baseAirUrl=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=`
  const airQualityUrl = `${baseAirUrl}european_aqi,uv_index&timezone=${timezone}&forecast_days=7`
  const hourlyUrl = `${baseWeatherUrl}hourly=is_day,apparent_temperature,visibility,wind_gusts_10m,relative_humidity_2m,dew_point_2m,precipitation,precipitation_probability,temperature_2m,rain,showers,snowfall,snow_depth,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl&timezone=${timezone}`
  const dailyUrl = `${baseWeatherUrl}daily=precipitation_sum,precipitation_probability_mean,uv_index_max,daylight_duration,sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,wind_gusts_10m_max&timezone=${timezone}`
  const currentUrl = `${baseWeatherUrl}current=temperature_2m,wind_speed_10m,wind_direction_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure,is_day,relative_humidity_2m&timezone=${timezone}`

  const [airQualityRes, hourlyRes, dailyRes, currentRes] = await Promise.all([
    fetch(airQualityUrl),
    fetch(hourlyUrl),
    fetch(dailyUrl),
    fetch(currentUrl),
  ])

  if (!airQualityRes.ok || !hourlyRes.ok || !dailyRes.ok || !currentRes.ok) {
    throw new Error("Failed to fetch one or more weather endpoints")
  }

  const [airQuality, hourly, daily, current] = await Promise.all([
    airQualityRes.json(),
    hourlyRes.json(),
    dailyRes.json(),
    currentRes.json(),
  ])

  return {
    airQuality,
    hourly,
    daily,
    current,
  }
}
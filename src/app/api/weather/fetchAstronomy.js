const API = process.env.NEXT_PUBLIC_IPGEOLOCATION_API

export async function fetchAstronomy(latitude, longitude, offset) {
  const dateRange = getDateRangeQuery()
  const moonUrl = `https://api.ipgeolocation.io/v3/astronomy/timeSeries?apiKey=${API}&lat=${latitude}&long=${longitude}${dateRange}`
  const phaseUrl = `https://api.met.no/weatherapi/sunrise/3.0/moon?lat=${latitude}&lon=${longitude}&date=`

  const [moonRes] = await Promise.all([
    fetch(moonUrl),
  ])

  if (!moonRes.ok) {
    throw new Error("Failed to fetch one or more weather endpoints")
  }

  const moonData = await moonRes.json()

  const results = []

  for (const el of moonData.astronomy) {
    const date = el.date

    const res = await fetch(phaseUrl + date + '&offset=' + offset)
    const data = await res.json()

    results.push({
      ...el,
      phaseData: data.properties
    })
  }

  return {
    results
  }
}

const getDateRangeQuery = () => {
  const today = new Date()
  const end = new Date()
  end.setDate(today.getDate() + 6)

  const format = date => {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
  }

  return `&dateStart=${format(today)}&dateEnd=${format(end)}`
}
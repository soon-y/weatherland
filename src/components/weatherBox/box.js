export default function Box({ style, children, setDisplay, title, setBoxClicked }) {
  const boxStyleForecast = 'w-full'
  const boxStyleWide = 'aspect-2/1 w-full sm:w-[calc(66.9%-7px)] sm:aspect-[2.5]'
  const boxStyleSquare = 'flex flex-col justify-between aspect-square w-[calc(50%-6px)] sm:w-[calc(33.3%-8px)]'

  return (
    <div className={`bg-white/20 rounded-xl px-4 py-3 select-none duration-300
    ${style === 'forecast' && boxStyleForecast}
    ${style === 'wide' && boxStyleWide}
    ${style === 'square' && boxStyleSquare}
    `} onClick={() => {
        if (style !== 'forecast') {
          setDisplay(title)
          setBoxClicked(true)
        }
      }}>
      {children}
    </div>
  )
}
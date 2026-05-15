export function Moon({cloud = false}) {
  const fillStyle = { fill: '#ffcf00' }

  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
    >
      <path className="scale-90 -translate-x-[1px] translate-y-[1px] origin-center"
        d="m14.3 6c-5.8 1.3-9.4 7-8.1 12.8 1.3 5.8 7.1 9.4 12.8 8.1 2.9-0.7 5.2-2.4 6.6-4.6 0.2-0.3 0.2-0.7 0-0.9-0.2-0.3-0.6-0.4-0.9-0.3q-0.6 0.3-1.4 0.5c-4.5 1-9-1.8-10-6.4-0.7-3.1 0.3-6.1 2.5-8.1 0.3-0.2 0.3-0.6 0.2-0.9-0.1-0.3-0.5-0.5-0.8-0.4q-0.5 0.1-0.9 0.2z"
        style={fillStyle}
      />

      {!cloud && 
      <g className="animate-[ping_4s_linear_infinite] origin-center translate-x-[8px] -translate-y-[8px]">
        <path
          fillRule="evenodd"
          d="m17 16l-1 5-1-5 1-5z"
          style={fillStyle}
        />
        <path
          fillRule="evenodd"
          d="m16 17l-5-1 5-1 5 1z"
          style={fillStyle}
        />
      </g>}

      {!cloud && 
      <g className="animate-[ping_4s_linear_infinite] origin-center scale-50 translate-x-[12px] translate-y-[2px]">
        <path
          fillRule="evenodd"
          d="m17 16l-1 5-1-5 1-5z"
          style={fillStyle}
        />
        <path
          fillRule="evenodd"
          d="m16 17l-5-1 5-1 5 1z"
          style={fillStyle}
        />
      </g>}
    </svg>
  )
}
"use client"

import { Sun } from '@/components/icons/sun'
import { useIsDebug } from '@/lib/param'
import { Html, useProgress } from '@react-three/drei'

export default function Loading() {
  const { progress } = useProgress()

  return (
    !useIsDebug && progress < 100 ?
      <Html center>
        <div className="flex flex-col items-center gap-0">
          <Sun className="w-20 h-20" />
          <span className='text-[#ffcf00] font-semibold'>{progress.toFixed(0)}%</span>
        </div>
      </Html>
      :
      null
  )
}
'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunnyOutline, MoonOutline } from 'react-ionicons'

const ThemeChanger = ({ styles }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      aria-label={
        resolvedTheme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
      }
      title={
        resolvedTheme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
      }
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className={styles}
    >
      {resolvedTheme === 'dark' ? (
        <span className="block w-4 h-4 text-white rounded-full group-hover:-translate-y-1 transition-transform">
          <SunnyOutline color={'white'} />
        </span>
      ) : (
        <span className="block w-4 h-4 text-black rounded-full group-hover:-translate-y-1 transition-transform">
          <MoonOutline />
        </span>
      )}
    </button>
  )
}

export default ThemeChanger

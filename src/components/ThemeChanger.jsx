'use client'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme()

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
      className={'bg-gray-300 dark:bg-gray-500 p-4 md:p-4 lg:p-2 rounded-full'}
    >
      {resolvedTheme === 'dark' ? (
        <span className="block text-white rounded-full group-hover:-translate-y-1 transition-transform">
          <FaSun color={'white'} />
        </span>
      ) : (
        <span className="block text-white rounded-full  group-hover:-translate-y-1 transition-transform">
          <FaMoon color={'black'} />
        </span>
      )}
    </button>
  )
}

export default ThemeChanger

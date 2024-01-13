'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const routes = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/posts',
    label: 'Posts',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
  {
    path: '/about',
    label: 'About',
  },
]

const MenuItems = () => {
  const removeFocus = e => {
    e.currentTarget.blur()
  }
  const currentRoute = usePathname()
  return (
    <>
      <div className="relative items-center justify-start flex-grow hidden space-x-6 md:flex">
        {routes.map(route => (
          <Link
            key={route.path}
            href={route.path}
            className={
              route.path === currentRoute
                ? 'text-fore-primary text-lg transition-colors active-nav tracking-wide'
                : 'text-fore-subtle text-lg transition-colors tracking-wide nav--item'
            }
            onClick={removeFocus}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </>
  )
}
export default MenuItems

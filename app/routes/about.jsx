import { Outlet, Link } from '@remix-run/react'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/boltcss/bolt.min.css'
    }
  ]
}

export default function App () {
  return (
      <>
        <Outlet />
        <Link to="/">Volver</Link>
      </>
  )
}

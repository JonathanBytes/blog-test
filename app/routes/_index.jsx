import { Link } from '@remix-run/react'

export const meta = () => {
  return [{ title: 'Blog testing' }]
}

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
      // href: 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css'
    }
  ]
}

export default function Index () {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Blog testing with Remix and Vercel</h1>
      <ul>
        <li>
          <Link to='about'>Sobre Mí</Link>
        </li>
        <li>
          <Link to='blog'>Blog</Link>
        </li>
      </ul>
    </div>
  )
}

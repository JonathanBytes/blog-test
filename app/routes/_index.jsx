import { Link } from '@remix-run/react'

export const meta = () => {
  return [{ title: 'Blog testing' }]
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
          <ul>
            <li>
              <Link to='blog/first'>Primer post</Link>
            </li>
            <li>
              <Link to='blog/second'>Second post</Link>
            </li>
            <li>
              <Link to='blog/third'>Third post</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

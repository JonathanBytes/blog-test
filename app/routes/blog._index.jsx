import { Link } from '@remix-run/react'

export const meta = () => {
  return [{ title: 'Blog posts' }]
}

export default function Posts () {
  return (
    <main>
      <h1>Posts</h1>
          <ul>
            <li>
              <Link to='/post/first'>Primer post</Link>
            </li>
            <li>
              <Link to='/post/second'>Second post</Link>
            </li>
            <li>
              <Link to='/post/third'>Third post</Link>
            </li>
          </ul>
    </main>
  )
}

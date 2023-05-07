import { json } from '@remix-run/node' // or cloudflare/deno
import { Link, useLoaderData } from '@remix-run/react'

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.
import * as postA from './post.first.mdx'
import * as postB from './post.second.mdx'
import * as postC from './post.third.mdx'

function postFromModule (mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta
  }
}

export async function loader () {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([
    postFromModule(postA),
    postFromModule(postB),
    postFromModule(postC)
  ])
}

export default function BlogIndex () {
  const posts = useLoaderData<typeof loader>()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description
            ? (
            <p>{post.description}</p>
              )
            : null}
        </li>
      ))}
    </ul>
  )
}

// import { Link } from '@remix-run/react'

// export const meta = () => {
//   return [{ title: 'Blog posts' }]
// }

// export default function Posts () {
//   return (
//     <main>
//       <h1>Posts</h1>
//           <ul>
//             <li>
//               <Link to='/post/first'>Primer post</Link>
//             </li>
//             <li>
//               <Link to='/post/second'>Second post</Link>
//             </li>
//             <li>
//               <Link to='/post/third'>Third post</Link>
//             </li>
//           </ul>
//     </main>
//   )
// }

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

// import styles from '~/styles/style.css'
import highlight from 'highlight.js/styles/base16/gruvbox-dark-soft.css'

export const links = () => {
  return [
    // {
    //   rel: 'stylesheet',
    //   href: 'https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css'
    // }
    // {
    //   rel: 'stylesheet',
    //   href: 'app/css/style.css'
    // }
    // {
    //   rel: 'stylesheet',
    //   href: 'https://unpkg.com/mvp.css@1.12/mvp.css'
    // }
    // {
    //   rel: 'stylesheet',
    //   href: 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css'
    // }
    // {
    //   rel: 'stylesheet',
    //   href: 'https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css'
    // }
    // {
    //   rel: 'stylesheet',
    //   href: styles
    // }
    {
      rel: 'stylesheet',
      href: highlight
    }
  ]
}

export default function App () {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

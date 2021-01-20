import type { AppProps /*, AppContext */ } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.scss'
import Head from 'next/head'
import {FrontendStatic, getAnalyticsTag} from 'src/helpers'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.EC = FrontendStatic
  })
  return (
    <>
      <Head>
        <title>Looking Stars</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script dangerouslySetInnerHTML={getAnalyticsTag()}/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

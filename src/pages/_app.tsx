import type {AppProps /*, AppContext */} from 'next/app'
import {useEffect} from 'react'
import Head from 'next/head'
import {FrontendStatic, getAnalyticsTag} from 'src/helpers'

import 'src/styles/globals.scss'

function MyApp ({Component, pageProps}: AppProps) {
  useEffect(() => {
    window.EC = FrontendStatic
  })
  return (
    <>
      <Head>
        <title>Bestenevoy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script dangerouslySetInnerHTML={getAnalyticsTag()} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

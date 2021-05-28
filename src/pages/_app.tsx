import type {AppProps /*, AppContext */} from 'next/app'
import {useEffect} from 'react'
import Head from 'next/head'
import {FrontendStatic} from 'src/helpers'
import {Analytics} from 'src/components'

import 'src/styles/globals.scss'

function MyApp ({Component, pageProps}: AppProps) {
    useEffect(() => {
        window.__APP__ = FrontendStatic
    })
    return (
        <>
            <Head>
                <title>Bestenevoy</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="all" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                {Analytics()}
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp

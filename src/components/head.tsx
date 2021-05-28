
import Head from 'next/head'
import {ReactNode} from 'react'
import {Analytics} from 'src/components'

interface IProps {
    title: string
    children?: ReactNode
    keywords?: string
}

export default function CustomHead ({title, children, keywords}: IProps) {
    return (
        <Head>
            <title>{title} | Bestenevoy</title>
            <meta name="keywords" content={keywords || "Next TypeScript React CSS JS"} />
            {Analytics()}
            {children}
        </Head>
    )
}

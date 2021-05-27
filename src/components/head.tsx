
import Head from 'next/head'
import {ReactNode} from 'react'


interface IProps {
    title: string
    children?: ReactNode
}

export default function CustomHead ({title, children}: IProps) {
    return (
        <Head>
            <title>{title} | Bestenevoy</title>
            {children}
        </Head>
    )
}

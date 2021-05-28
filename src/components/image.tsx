import {ReactEventHandler} from "react"
import type {ImageProps} from 'next/image'
import Image from 'next/image'

type IProps = ImageProps & {
    download?: boolean
}

export default function CustomImage (props: IProps) {
    const {download} = props
    const display: ReactEventHandler<HTMLImageElement> = (e) => {
        e.preventDefault && e.preventDefault()
    }
    const prop = Object()
    !download && Object.assign(prop, {onDragStart: display, onContextMenu: display})
    const newProps = Object.assign(prop, props)
    return <>{Image(newProps)}</>
}

import {useEffect} from 'react'
import Typed from 'typed.js'
import {HOME_TEXT} from 'src/config'

interface ITypingProps {
    strings?: string[]
    className?: string
    id: string,
    loop?: boolean
}

export default function stringTyping ({
    strings,
    className = '',
    id = 'strtype',
    loop = false,
}: ITypingProps) {
    const options = {
        strings: strings || HOME_TEXT,
        typeSpeed: 20,
        loop: loop,
        backDelay: 1200,
    }
    useEffect(() => {
        const typed = new Typed(`#${id}`, options)
        return () => typed.destroy()
    })
    return (
        <p className="font-art">
            <span className={`${className}`} id={id}></span>
        </p>
    )
}

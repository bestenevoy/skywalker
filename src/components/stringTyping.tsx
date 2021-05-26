import {useEffect} from 'react'
import Typed from 'typed.js'
import {HOME_TEXT} from 'src/config'


export default function stringTyping ({strings}: {strings?: string[]}) {
    const id = "stringtyping"
    const options = {
        strings: strings || HOME_TEXT,
        typeSpeed: 40,
        loop: true,
        backDelay: 1200,
        showCursor: false,
    }
    useEffect(() => {
        const typed = new Typed(`#${id}`, options)
        return () => typed.destroy()
    })
    return (
        <>
            <span id={id}></span>
        </>
    )
}

import {useState} from 'react'
import {BackendStatic} from 'src/helpers'


export default function ICP () {
    const [hover, setHover] = useState(false)
    const onHover = () => setHover(true)
    const onLeave = () => setHover(false)

    const footer = {
        color: hover ? '#FF9966' : '',
    }

    const icp = () => {
        if (BackendStatic.BEIAN_ID) {
            return <a href="http://beian.miit.gov.cn" style={footer} onMouseEnter={onHover} onMouseLeave={onLeave}>{BackendStatic.BEIAN_ID}</a>
        }
        return ""
    }

    return (
        <>
            {icp()}
        </>
    )
}
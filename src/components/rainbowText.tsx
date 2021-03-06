import react from 'react'
import Splitting from "splitting"

interface rainbowPorps {
  text: string
}

const rainbowText = (props: rainbowPorps) => {

  const rainbowStyle: react.CSSProperties = {
    color: '#FFF',
    font: 'italic 500 8vw/1.5 CamingoCode, serif, Kanit',
    textAlign: 'center',
  }

  return (
    <>
      <link rel="stylesheet" href="/css/rainbow.css" />
      <link rel="stylesheet" href="/css/splitting-cells.css" />
      <link rel="stylesheet" href="/css/splitting.css" />
      <div className='rainbow-text animated select-none' style={rainbowStyle} dangerouslySetInnerHTML={{__html: Splitting.html({content: props.text, by: 'chars'})}}></div>
    </>
  )
}

rainbowText.defaultProps = {
  text: 'Looking' as rainbowPorps['text']
}

export default rainbowText

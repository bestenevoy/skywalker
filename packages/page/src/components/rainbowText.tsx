import react, { DOMElement } from 'react'
import Splitting from "splitting";

type rainbowPorps = {
  text: string
}

const rainbowText = (props: rainbowPorps) => {

  const rainbowStyle: react.CSSProperties = {
    background: 'black',
    color: '#FFF',
    font: 'italic 500 8vw/1.5 CamingoCode, serif, Kanit',
    textAlign: 'center',
  }

  return <>
    <link rel="stylesheet" href="/css/rainbow.css" />
    <link rel="stylesheet" href="/css/splitting-cells.css" />
    <link rel="stylesheet" href="/css/splitting.css" />
    <div className='rainbow-text animated' style={rainbowStyle} dangerouslySetInnerHTML={{ __html: Splitting.html({ content: props.text, by: 'chars' }) }}></div>
    {/* <div dangerouslySetInnerHTML={{__html:html()}}></div> */}
  </>
}

rainbowText.defaultProps = {
  text: 'Looking' as rainbowPorps['text']
}
export default rainbowText
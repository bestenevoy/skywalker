import React, { useState } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
// import _ from 'lodash'

const RainbowTextDynamic = dynamic(
  () => import('../components/rainbowText'),
  { ssr: false }
)
export default function Home() {
  const [isHover, setIsHover] = useState(false);
  const footer = {
    color: isHover ? '#FF9966' : '#95dee3',
  }

  const bodyCSS: React.CSSProperties = {
    backgroundColor: 'black'
  }
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 flex-col justify-center items-center">
        <>
          <RainbowTextDynamic text="Looking" />
        </>
      </main>

      <footer className={styles.footer}>
        <div>Copyright &copy;2020-2021 Looking Stars. All rights reserved.&nbsp;&nbsp;</div>
        <div>
          <span>
            Built with &nbsp;<a className="text-red-500" href="http://nextjs.org">Next.js🔥</a>.&nbsp;&nbsp;
          </span>
          <a href="http://beian.miit.gov.cn" style={footer} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => setIsHover(false)}>鲁ICP备2021001122</a>
        </div>
      </footer>
    </div>
  )
}

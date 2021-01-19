import React, {useState } from 'react';
import dynamic from 'next/dynamic'
// import _ from 'lodash'

const RainbowTextDynamic = dynamic(
  () => import('src/components/rainbowText'),
  { ssr: false }
)

export default function Home() {
  const [isHover, setIsHover] = useState(false);
  const footer = {
    color: isHover ? '#FF9966' : '#000',
  }

  return (
    <div className="home text-center w-screen">
      <main className="flex flex-1 flex-col justify-center items-center">
        <>
          <RainbowTextDynamic text="Looking" />
        </>
      </main>

      <footer className="flex w-full sm:block md:flex justify-center text-sm">
        <div>Copyright &copy;2020-2021 <strong>Looking Stars.</strong> <span className="hidden sm:inline">All rights reserved.&nbsp;</span></div>
        <div className="hidden sm:block">
          <span>
            Built with &nbsp;<a className="text-red-500" href="http://nextjs.org">Next.js🔥</a>.&nbsp;
          </span>
          <a href="http://beian.miit.gov.cn" style={footer} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => setIsHover(false)}>鲁ICP备2021001122</a>
        </div>
      </footer>
    </div>
  )
}

import React, {useState } from 'react';
import dynamic from 'next/dynamic'
import {BackendStatic} from 'src/helpers/index'
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
  let ICP;
  if(BackendStatic.BEIAN_ID){
    ICP = <a href="http://beian.miit.gov.cn" style={footer} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => setIsHover(false)}>{BackendStatic.BEIAN_ID}</a>
  }
  return (
    <div className="home text-center w-screen">
      <main className="flex flex-1 flex-col justify-center items-center">
        <>
          <RainbowTextDynamic text="Looking" />
        </>
      </main>

      <footer className="flex w-full sm:block md:flex justify-center text-sm">
        <div>Copyright &copy;2020-2021 <strong><a href="https://blog.wrz8.com">Rosen Blog</a>.</strong> <span className="hidden sm:inline">All rights reserved.&nbsp;</span></div>
        <div className="hidden sm:block">
          <span>
            Built with &nbsp;<a className="text-red-500" href="http://nextjs.org">Next.js🔥</a>.&nbsp;
          </span>
          {ICP}
        </div>
      </footer>
    </div>
  )
}

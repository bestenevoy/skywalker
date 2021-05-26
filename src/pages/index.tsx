import Link from 'next/link'
import Img from 'next/image'
import {StringTyping, ICP} from 'src/components'

export default function Home () {

  return (
    <div className="home text-center w-screen relative">
      <Img className="object-cover z-0 top-0 right-0 absolute" src="/home.jpeg" layout="fill" alt="/home.jpeg" />
      <main className="z-10 flex flex-1 flex-col justify-center items-center">
        <div className="whitespace-pre text-2xl">
          <StringTyping />
        </div>
      </main>
      <footer className="z-10 flex w-full sm:block md:flex justify-center text-sm p-3">
        <div>Copyright &copy;2020-2021 &nbsp;
          <strong>
            <a href="https://blog.wrz8.com">Blog</a> |
            <span className="text-red-500">
              &nbsp;<Link href="/about">About</Link>
            </span>
            .
          </strong>
        </div>
        <div className="hidden sm:block">
          <span>
            &nbsp;Built with &nbsp;<a className="text-red-500" href="http://nextjs.org">Next.js🔥</a>.&nbsp;
          </span>
          <ICP />
        </div>
      </footer>
    </div>
  )
}

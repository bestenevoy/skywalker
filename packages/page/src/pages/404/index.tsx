import Link from 'next/link'

export default function FourOhFour() {
  return <div className="text-white flex flex-col flex-1 items-center z-base content-center min-h-screen">
    <div className="m-auto">
      <div className="text-center">
        <h1 className="text-2xl">404 - Page Not Found</h1>
        <Link href="/">
          <a className="text-red-100 z-50 text-xl">
            <img className="w-1/2 m-auto p-2 h-1/2 shadow-lg" src="./404image.gif" alt="" />
            Go back home
          </a>
        </Link>
      </div>
    </div>
  </div>
}
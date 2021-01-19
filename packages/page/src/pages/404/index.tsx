
export default function FourOhFour() {
  const goBack = () => history.back()
  return <div className="text-white flex flex-col flex-1 items-center z-base content-center min-h-screen">
    <div className="m-auto">
      <div className="text-center">
        <h1 className="text-2xl">404 - Page Not Found</h1>
        <img className="w-1/2 m-auto p-2 h-1/2 shadow-lg cursor-pointer" src="/image404.gif" alt="" onClick={goBack} />
        <div className="text-red-100 z-50 text-xl cursor-pointer">
          <a className='p-5' onClick={goBack}>Go back</a>
          <a className='p-5' href="/">Home</a>
        </div>
      </div>
    </div>
  </div>
}
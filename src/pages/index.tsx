import {StringTyping, Head, Footer, Image} from 'src/components'
import {getRandomImage} from 'src/helpers'

export default function Home () {
    const src = getRandomImage()
    return (
        <div className="home bg-black min-h-screen flex flex-col select-none text-center w-screen relative">
            <Head title="Home" />
            <main className="flex flex-1 flex-col justify-center items-center">
                <div className="sm:whitespace-pre text-2xl">
                    <Image className="object-cover top-0 right-0 absolute" key={src} src={src} alt="index page background image" layout="fill" />
                    <StringTyping id="string-typing" className="font-bold text-shadow text-4xl text-white mix-blend-difference" />
                </div>
            </main>
            <Footer />
        </div>
    )
}

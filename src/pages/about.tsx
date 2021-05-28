import {Head, Header} from 'src/components'

export default function Home () {
    return (
        <div className="h-screen flex flex-col">
            <Head title="About me" />
            <Header className="w-1/2"></Header>
            <div className="flex justify-center items-center flex-col flex-grow">
                <main className="w-1/2 m-auto leading-6">
                    <h1 className="article-title pt-5 pb-5 text-2xl">
                        <span>The stars are beautiful, because of a flower that cannot be seen.</span>
                    </h1>
                    <article>
                        <p>My name is WRZ, a web developer.</p>
                        <p>with Python JavaScript PHP skills and learning Rust.</p>
                    </article>
                </main>
            </div>
        </div>
    )
}

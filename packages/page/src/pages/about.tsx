import Header from '@/components/header'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header className="w-1/2 text-center"></Header>
      <div className="flex justify-center items-center flex-col flex-grow">
        <main className="w-1/2 m-auto leading-6">
          <h1 className="article-title pt-5 pb-5 text-2xl">
            The stars are beautiful, because of a flower that cannot be seen.
          </h1>
          <article>
            <p>My name is WRZ, a web developer.</p>
            <p>Skill: Python JavaScript Rust PHP</p>
          </article>
        </main>
      </div>
    </div>

  )
}

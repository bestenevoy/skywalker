
interface postProps {
  header: string,
  content: string,
  datetime?: string
}

const Posts: React.FunctionComponent<postProps> = ({header = "这里是标题", content = "这里是内容", datetime = ''}) => {

  return (
    <div className="dark:text-white">
      <main className="panel-right post">
        <header>
          <h1>{header}</h1>
          <p className="post-meta">
            <time dateTime={datetime}>{datetime}</time>
          </p>
        </header>
        <article className="content-center">
          {content}
        </article>
      </main>
      <div className="panel-left sidebar">
        None
      </div>
    </div>
  )
}

export default Posts
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  // 如果要重写render 就必须按照这个结构来写
  render() {
    return (
      <Html>
        <Head>
          
        </Head>
        <body className="font-mono" >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
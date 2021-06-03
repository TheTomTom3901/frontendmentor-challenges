import Document, { Html, Head, Main, NextScript } from 'next/document'

// noinspection HtmlRequiredTitleElement
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
import React from 'react';
import Head from 'next/head'

import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Frontend Mentor Challenges</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp

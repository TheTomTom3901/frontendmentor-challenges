import Head from 'next/head'

const CustomHead = ({ title, children }) => (
  <Head>
    <title>Frontend Mentor | {title}</title>
    {children}
  </Head>
)

export default CustomHead

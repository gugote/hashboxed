import '../styles/main.scss'
import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Hashboxed</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

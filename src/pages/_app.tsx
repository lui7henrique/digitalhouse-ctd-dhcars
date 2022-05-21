import "aos/dist/aos.css"
import AOS from "aos"
import { AppProvider } from "context"
import { AppProps } from "next/app"
import Head from "next/head"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/global"
import theme from "styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250
    })
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppProvider>
          <Component {...pageProps} />
          <Toaster />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp

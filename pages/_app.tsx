import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <Provider store={store}>
      {domLoaded && <Component {...pageProps} />}
    </Provider>
  )
}

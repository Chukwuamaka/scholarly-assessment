import '../styles/globals.css'
import type { AppProps } from 'next/app';
import FormContextProvider from '../context/FormContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  )
}

export default MyApp

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from '../context/index'

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

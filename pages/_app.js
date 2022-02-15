import Nav from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-gray-900" >
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp

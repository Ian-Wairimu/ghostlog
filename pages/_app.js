import '../styles/globals.css';
import '../styles/footer.css';
import '../styles/navigation.css';
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export function reportWebVitals(metric) {
  const body = JSON.stringify(metric)
  const url = ""
  //we use navigator.sendBeacon if available, if not we fall back to fetch
  if(navigator.sendBeacon){
    navigator.sendBeacon(url, body)
  }else {
    fetch(url, {
          body,
          method: 'POST',
          keepalive: true
         }
    )
  }
  console.log(metric)
}
function MyApp({ Component, pageProps }) {
  return(
      <>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
      </>
  )
}

export default MyApp

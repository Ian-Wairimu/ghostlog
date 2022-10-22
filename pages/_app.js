import '../styles/globals.css';

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
    ).then(r => console.log(r))
  }
  console.log(metric)
}
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

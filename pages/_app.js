import React, {useEffect, useState} from "react";
import '../styles/globals.css';
import '../styles/footer.css';
import '../styles/navigation.css';
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import {PulseLoader} from "react-spinners";

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
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
  return(
      <>
          {
              loading ? <span className="loader">
                  <PulseLoader color="#26A653" />
              </span> : (
                  <div>
                      <Navigation />
                      <Component {...pageProps} />
                      <Footer />
                  </div>
              )
          }
      </>
  )
}

export default MyApp

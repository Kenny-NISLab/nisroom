import { useEffect } from "react";
import "../styles/globals.css";

function noScroll(event) {
  event.preventDefault();
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("touchmove", noScroll, { passive: false }); // スクロール禁止(SP)
    window.addEventListener("mousewheel", noScroll, { passive: false }); // スクロール禁止(PC)});
  });

  return <Component {...pageProps} />;
}

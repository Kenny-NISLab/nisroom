import React, { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "./lib/fetcher";
import Consistants from "./consistants";
import Container from "./components/common/container";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Students from "./components/students";

export default function App() {
  useEffect(() => {
    window.addEventListener("touchmove", noScroll, { passive: false }); // スクロール禁止(SP)
    window.addEventListener("mousewheel", noScroll, { passive: false }); // スクロール禁止(PC)});
  });

  const windowSize = useWindowSize();

  const { data, error } = useSWR(Consistants.api_baseurl + "/users", fetcher, { refreshInterval: 10000 });
  if (error || !data) {
    return <>Loading ...</>;
  }

  return (
    <>
      <Header windowSize={windowSize} />
      <Container>
        <Students data={data} windowSize={windowSize} />
      </Container>
      <Footer windowSize={windowSize} />
    </>
  );
}

function noScroll(event) {
  event.preventDefault();
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    headerHeight: undefined,
    footerHeight: undefined,
    isSp: undefined,
    hostname: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        headerHeight: window.innerWidth < 768 ? 40 : 60,
        footerHeight: 28,
        isSp: window.innerWidth < 768,
        hostname: window.location.hostname,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

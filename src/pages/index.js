import React, { useEffect, useState } from "react";
import useSWR from "swr";

import fetcher from "../lib/fetcher";
import Consistants from "../consistants";
import ReloadButton from "../assets/reload";
import Nisroom from "../assets/nisroom";

import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import Student from "../components/student";

export default function Index() {
  useEffect(() => {
    window.addEventListener("touchmove", noScroll, { passive: false }); // スクロール禁止(SP)
    window.addEventListener("mousewheel", noScroll, { passive: false }); // スクロール禁止(PC)});
  });

  const windowSize = useWindowSize();

  const { data, error } = useSWR(Consistants.api_baseurl + "/users", fetcher);

  if (error || !data) {
    return (
      <div className="h-screen flex items-center">
        <div className="mx-auto w-[120px]">
          <Nisroom />
        </div>
      </div>
    );
  }

  const studentsHsize = windowSize.height - (windowSize.headerHeight + windowSize.footerHeight);
  const studentsStyle = { height: studentsHsize + "px" };
  const studentHsize = windowSize.isSp ? 4 : 6;
  const studentHeight = studentsHsize / Math.ceil(data.length / studentHsize);
  const studentStyle = { height: studentHeight + "px" };

  const students = data.map((student) => <Student key={student.name} data={student} height={studentHeight} hostname={windowSize.hostname} />);

  return (
    <>
      <Header windowSize={windowSize} />
      <Container>
        <div style={studentsStyle}>
          <div className="grid grid-cols-4 md:grid-cols-6">
            {students}
            <div style={studentStyle} className="flex items-center mx-auto">
              <div className="w-14 md:w-20 lg:w-24 hover:cursor-pointer">
                <a href="/">
                  <ReloadButton />
                </a>
              </div>
            </div>
          </div>
        </div>
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

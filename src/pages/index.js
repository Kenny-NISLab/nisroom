import React, { useEffect, useState } from "react";
import axios from "axios";

import Consistants from "../consistants";
import SetTime from "../lib/setTIme";
import ReloadButton from "../assets/reload";
import Nisroom from "../assets/nisroom";
import Styles from "./index.module.css";

import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";
import Student from "../components/student";

export default function Index() {
  const [students, setStudents] = useState([]);
  const [updatedTime, setUpdatedTime] = useState("");
  const [isRotate, setIsRotate] = useState(false);

  useEffect(() => {
    window.addEventListener("touchmove", noScroll, { passive: false }); // スクロール禁止(SP)
    window.addEventListener("mousewheel", noScroll, { passive: false }); // スクロール禁止(PC)});

    axios.get(Consistants.api_baseurl + "/users").then((response) => {
      setStudents(response.data);
    });

    changeUpdatedTime();
  }, []);

  const windowSize = useWindowSize();

  if (!students.length) {
    return (
      <div className="h-screen flex items-center">
        <div className="mx-auto w-[120px]">
          <Nisroom />
        </div>
      </div>
    );
  }

  function onClickReload() {
    setIsRotate(true);
    setTimeout(function () {
      setIsRotate(false);
    }, 500);

    axios.get(Consistants.api_baseurl + "/users").then((response) => {
      setStudents(response.data);
    });

    changeUpdatedTime();
  }

  function changeUpdatedTime() {
    setUpdatedTime(SetTime());
  }

  function changeStudentIsStay(index, newData) {
    setStudents(students.map((student, i) => (i === index ? newData : student)));

    axios.patch(Consistants.api_baseurl + "/users/" + newData.name, {
      isStay: newData.isStay,
    });
  }

  const studentsHsize = windowSize.height - (windowSize.headerHeight + windowSize.footerHeight);
  const studentsStyle = { height: studentsHsize + "px" };
  const studentHsize = windowSize.isSp ? 4 : 6;
  const studentHeight = studentsHsize / Math.ceil(students.length / studentHsize);
  const studentStyle = { height: studentHeight + "px" };
  const isRotateClass = isRotate ? `${Styles["rotateR"]}` : "";

  const studentsComponent = students.map((student) => (
    <Student
      key={student.name}
      index={student.index}
      student={student}
      height={studentHeight}
      hostname={windowSize.hostname}
      changeUpdatedTime={changeUpdatedTime}
      changeStudentIsStay={changeStudentIsStay}
    />
  ));

  return (
    <>
      <Header windowSize={windowSize} updatedTime={updatedTime} />
      <Container>
        <div style={studentsStyle}>
          <div className="grid grid-cols-4 md:grid-cols-6">
            {studentsComponent}
            <div style={studentStyle} className="flex items-center mx-auto">
              <div className={`w-14 md:w-20 lg:w-24 hover:cursor-pointer ${isRotateClass} mb-[2em]`} onClick={onClickReload}>
                <ReloadButton />
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
        headerHeight: window.innerWidth < 768 ? 60 : 90,
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

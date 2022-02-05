import { useState } from "react";

import Consistants from "../consistants";
import Styles from "./student.module.css";

export default function Student(props) {
  const [isRotate, setIsRotate] = useState(false);

  const studentStyle = { height: props.height + "px" };
  const isRotateClass = isRotate ? `${Styles["rotateY"]}` : "";

  function onClickStudent() {
    if (props.hostname === Consistants.hostname) {
      setIsRotate(true);
      setTimeout(function () {
        setIsRotate(false);
      }, 500);

      props.student.isStay = !props.student.isStay;
      props.changeStudentIsStay(props.index, props.student);

      props.changeUpdatedTime();
    } else {
      setIsRotate(true);
      setTimeout(function () {
        setIsRotate(false);
      }, 90);
    }
  }

  return (
    <div style={studentStyle} className="flex items-center mx-auto">
      <div>
        <div
          className={`border-4 rounded-2xl w-14 md:w-20 lg:w-24 hover:cursor-pointer ${isRotateClass} ${Styles.wrapper} ${
            props.student.isStay ? " border-emerald-400" : "border-gray-300"
          }`}
        >
          <img
            src={props.student.avatarImage}
            width={512}
            height={512}
            alt={props.student.name}
            className={`rounded-xl ${props.student.isStay ? "opacity-80" : "opacity-30"}`}
            onClick={onClickStudent}
          />
        </div>
        <p className="text-center text-xs md:text-base">{props.student.name}</p>
      </div>
    </div>
  );
}

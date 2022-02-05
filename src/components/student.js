import axios from "axios";
import { useEffect, useState } from "react";

import Consistants from "../consistants";
import SetTime from "../lib/setTIme";
import Styles from "./student.module.css";

export default function Student(props) {
  const [student, setStudent] = useState({});
  const [isRotate, setIsRotate] = useState(false);

  useEffect(() => {
    setStudent(props.data);
  }, [props.data]);

  if (!student.name) {
    return <></>;
  }

  const studentStyle = { height: props.height + "px" };
  const isRotateClass = isRotate ? `${Styles["rotateY"]}` : "";

  function onClickStudent() {
    if (props.hostname === Consistants.hostname) {
      setIsRotate(true);
      setTimeout(function () {
        setIsRotate(false);
      }, 500);

      props.changeUpdatedTime(SetTime());
      student.isStay = !student.isStay;
      axios.patch(Consistants.api_baseurl + "/users/" + student.name, {
        isStay: student.isStay,
      });
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
            student.isStay ? " border-emerald-400" : "border-gray-300"
          }`}
        >
          <img
            src={student.avatarImage}
            width={512}
            height={512}
            alt={student.name}
            className={`rounded-xl ${student.isStay ? "opacity-80" : "opacity-30"}`}
            onClick={onClickStudent}
          />
        </div>
        <p className="text-center text-xs md:text-base">{student.name}</p>
      </div>
    </div>
  );
}

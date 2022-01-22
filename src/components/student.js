import axios from "axios";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import fetcher from "../lib/fetcher";
import Consistants from "../consistants";
import Styles from "../styles/student.module.css";

async function patchIsStay(student) {
  await axios.patch(Consistants.api_baseurl + "/users/" + student.name, {
    isStay: !student.isStay,
  });
}

export default function Student(props) {
  const studentStyle = { height: props.height + "px" };

  const { mutate } = useSWRConfig();
  const initialData = props.data;
  const { data } = useSWR(Consistants.api_baseurl + "/users/" + props.data.name, fetcher, {
    initialData,
  });

  const [isRotate, setIsRotate] = useState(false);
  const isRotateClass = isRotate ? `${Styles["rotateY"]}` : "";

  async function onClickStudent() {
    if (props.hostname === Consistants.hostname) {
      setIsRotate(true);
      setTimeout(function () {
        setIsRotate(false);
      }, 800);
      await patchIsStay(data);
      mutate(Consistants.api_baseurl + "/users/" + data.name);
    } else {
      setIsRotate(true);
      setTimeout(function () {
        setIsRotate(false);
      }, 60);
    }
  }

  if (data) {
    return (
      <div style={studentStyle} className="flex items-center mx-auto">
        <div>
          <div
            className={`border-4 rounded-2xl w-14 md:w-20 lg:w-24 hover:cursor-pointer ${isRotateClass} ${Styles.wrapper} ${
              data.isStay ? " border-emerald-400" : "border-gray-300"
            }`}
          >
            <img
              src={data.avatarImage}
              width={512}
              height={512}
              alt={data.name}
              className={`rounded-xl ${data.isStay ? "opacity-80" : "opacity-30"}`}
              onClick={onClickStudent}
            />
          </div>
          <p className="text-center text-xs md:text-base">{data.name}</p>
        </div>
      </div>
    );
  }

  return <></>;
}

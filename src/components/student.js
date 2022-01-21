import axios from "axios";
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import Image from "next/image";
import fetcher from "../lib/fetcher";
import Consistant from "../consistant";
import Styles from "../styles/Student.module.css";

async function patchIsStay(student) {
  await axios.patch("/api/users/" + student.name, { isStay: !student.isStay });
}

export default function Student(props) {
  const studentStyle = { height: props.height + "px" };

  const { mutate } = useSWRConfig();
  const initialData = props.data;
  const { data } = useSWR("/api/users/" + props.data.name, fetcher, { initialData });

  const [isRotate, setIsRotate] = useState(false);
  const isRotateClass = isRotate ? `${Styles["rotateY"]}` : "";

  function removeRotateY() {
    setIsRotate(false);
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
            <Image
              src={data.avatarImage}
              width={512}
              height={512}
              alt={data.name}
              className={`rounded-xl ${data.isStay ? "opacity-80" : "opacity-30"}`}
              onClick={async () => {
                if (props.hostname === Consistant.hostname) {
                  setIsRotate(true), setTimeout(removeRotateY, 500), await patchIsStay(data), mutate("/api/users/" + data.name);
                }
              }}
            />
          </div>
          <p className="text-center text-xs md:text-base">{data.name}</p>
        </div>
      </div>
    );
  }

  return <></>;
}

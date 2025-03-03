import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function RightSideBar() {
  return (
    <div className="bg-white flex w-[70px] h-[250px]  absolute top-[73px] right-0 rounded-s-2xl shadow-lg ">
      <div className="bg-black text-white rounded-s-2xl   flex flex-col  items-center p-1">
        <RxCross2 className="mb-2 text-2xl" />

        {"Notice".split("").map((char, index) => (
          <span className="mb-[-6px] text-sm" key={index}>
            {char}
          </span>
        ))}

        <br />
        {"Board".split("").map((char, index) => (
          <span className="mb-[-6px] text-sm" key={index}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { FaQuestion } from "react-icons/fa";

export default function BottomMenu() {
  return (
    <div className="fixed bottom-5 text-white right-10">
      <div className=" flex flex-col space-y-3">
        <div className="h-10 rounded-full cursor-pointer justify-center items-center flex w-10 bg-[#0129FF]">
          <FaQuestion />
        </div>
        <div className="h-10 rounded-full justify-center cursor-pointer p-2 items-center flex w-10 bg-[#0129FF]">
          <img className="" src="/meet.png" />
        </div>
        <div className="h-10 rounded-full justify-center  p-2 items-center cursor-pointer flex w-10 bg-[#0129FF]">
          <img className="" src="/calendar.png" />
        </div>
      </div>
    </div>
  );
}

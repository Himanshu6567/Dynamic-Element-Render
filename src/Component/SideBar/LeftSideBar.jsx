import React, { useContext, useState } from "react";
import { GrFormNextLink, GrLinkPrevious } from "react-icons/gr";
import { AssetContext } from "../Context";

export default function LeftSideBar() {
  const { assetData } = useContext(AssetContext);
  const [openSideBar, setOpenSideBar] = useState(false); // store the state of sidebar is open or close

  const handleShowSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div
      className={`w-[370px] rounded-2xl shadow-lg h-[400px] z-50 absolute bg-white top-[68px] transition-all duration-300 ${
        openSideBar ? "left-0" : "left-[-300px]"
      }`}
    >
      <div className="  ">
        <div className="h-[35px] flex items-center rounded-tr-lg justify-between px-6 bg-black">
          <span className="text-white ">
            <h1>Journey Board</h1>
          </span>
          <span
            onClick={handleShowSideBar}
            className=" rounded-full bg-white h-5 w-5 flex justify-center items-center cursor-pointer"
          >
            {openSideBar ? <GrLinkPrevious /> : <GrFormNextLink />}
          </span>
        </div>

        <div className="px-8  py-5">
          <span>
            <li className="font-semibold">Explore the world of management</li>
          </span>
          <div className="text-sm  px-3 mt-4">
            <ul className="list-disc">
              {assetData.map((asset) => {
                // list of all assets
                return <li className="pl-6">{asset.asset_title}</li>;
              })}
            </ul>
          </div>
        </div>

        {!openSideBar && (
          <button className="border border-[#0129FF] px-3 py-2 rounded-lg absolute top-16 right-5 ">
            1
          </button>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { FaHome } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="h-[70px] flex w-full  bg-[#f0f0f0]">
      <div className="flex items-center justify-between  w-full px-[70px]">
        <img className="mix-blend-multiply h-[49px]" src="/logo.png" />

        <div className="md:flex  hidden space-x-6 items-center">
          <span className="bg-[#3580EB] w-[30px] h-[32.37px] text-white flex justify-center items-center rounded-full">
            <FaHome className="h-[18.34px] w-[17px]" />
          </span>
          <span className="bg-[#3580EB] w-[30px] h-[32.37px] text-white flex justify-center items-center rounded-full">
            <FaScrewdriverWrench className="h-[18.34px] w-[17px]" />
          </span>
          <span className="bg-[#3580EB] w-[30px] h-[32.37px] text-white flex justify-center items-center rounded-full">
            <FaBell className="h-[18.34px] w-[17px]" />
          </span>

          <img
            className="h-[37px] w-[37px] rounded-full"
            src="https://s3-alpha-sig.figma.com/img/7ac8/5301/b9bfc59f733c9f17f2bede82c41154f1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uLuofeleua6We9q2ZYOThZz2aMehffo435zWphcRv8Vw3mxxgSHIsg-ROYmyL~gzR7bMPNhAQoSdk6Es5dQl~8GcBiBatDREZMCVLXKm-OoLX~XEW1iYT5svxQivQvhErh9cOUFFnae8rsBrHMl9yXTUDSit-LFj9GQ1LMStpSgrjkM6a01RmUCnnfRShl49wSE2QdadsuaZBPgVIhMe1sboVgo7qu04RHyNpHTvUV8I0Cge3FT~LolUO7RMFQsb9kzo0XrDRKTmp8aNgTCKkOT-3-qPSbgmrTSPHqLiYLFsHEow~478~uOSyiAZIkeMkYH~eDEfnbBdClS2H2jBBw__"
          />
          <BsThreeDotsVertical className="text-[#3580EB]" />
        </div>
        <button className=" text-[#3580EB] md:hidden">
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

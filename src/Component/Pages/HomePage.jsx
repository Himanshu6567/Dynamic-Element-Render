import React, { useContext, useEffect, useState } from "react";
import AssetTemplate from "./AssetTemplate";
import { AssetContext } from "../Context";

export default function HomePage() {
  const { assetData, ProjectTitle } = useContext(AssetContext); //get assetData List and projectTitle from usecontext

  return (
    <div>
      <div className="px-40 mt-5 justify-center flex">
        <div>
          <div className="flex  justify-between">
            <h1 className="text-[#0129FF]  font-bold -[466px] h-[42px] nt-[Poppins] text-3xl">
              {ProjectTitle}
            </h1>
            <button className="bg-[#0129FF] text-white w-[121px] h-[36px] rounded-lg">
              Submit task
            </button>
          </div>
          <div className="bg-[#E9ECEF] -[1066px] -[135px] mt-10 px-8 py-5">
            <div className="font-[Poppins]">
              <span className="font-bold ">
                Explore the world of management
              </span>
              <br />
              <span>
                As a project manager, you play an important reole in leading a
                project through initiation, planning, execution, monitoring,
                controlling and completion. How? Do you want to manage each and
                every step of your life?
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*  asset map */}
      {/*  */}
      <div className="mt-12 mb-10 px-6 flex justify-center lg:px-44">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1   lg:grid-cols-2 gap-10">
          {assetData.map((asset, i) => {
            return <AssetTemplate asset={asset} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

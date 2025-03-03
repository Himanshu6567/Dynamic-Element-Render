import React from "react";
import { IoIosInformationCircle, IoMdBulb } from "react-icons/io";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FiCornerUpLeft, FiCornerUpRight } from "react-icons/fi";
import { CgMaximizeAlt } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";

export default function AssetTemplate({ asset }) {
  console.log("from asset", asset.asset_content);

  return (
    <div className="h-[580px] w-[410px] border-2 shadow-md rounded-2xl z-10 bg-white overflow-hidden">
      <div className="h-[50px] bg-black text-white  justify-center relative flex items-center w-full px-3 rounded-t-lg">
        <h1 className="">{asset.asset_title}</h1>
        <span className="ml-auto cursor-pointer absolute right-6">
          <IoIosInformationCircle />
        </span>
      </div>
      <div className=" min-h-24 border flex items-center py-4 px-3">
        <h1 className="text-sm">
          <span className="font-semibold">Description: </span>
          {asset.asset_description}
        </h1>
      </div>

      <div>
        {/* first asset */}
        {asset.asset_type == "display_asset" &&
          asset.asset_content_type == "video" && (
            <iframe
              className="w-full h-60"
              src={asset.asset_content}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
      </div>
      <div>
        {/* second asset */}
        {asset.asset_type == "input_asset" &&
          asset.asset_content_type == "threadbuilder" && (
            <div>
              <div className="h-[40px] bg-[#FEFFC033] flex relative px-5 items-center">
                <span className="mr-auto">
                  <FaChevronUp />
                </span>
                <span className="font-semibold absolute left-1/2 transform -translate-x-1/2">
                  Thread A
                </span>
              </div>

              {/* ///// */}
              <div className="flex space-x-5 items-center justify-center mt-6">
                <div className="bg-gray-100 w-[165px]  flex flex-col h-[110px] justify-end rounded-xl">
                  <span className="px-3 text-sm"> Sub thread 1</span>
                  <input
                    placeholder="Enter Text here"
                    className="h-[70px] px-3  shadow-lg border mt-2  rounded-xl"
                  />
                </div>
                <div className="bg-gray-100 w-[170px]  flex flex-col h-[110px] justify-end rounded-xl">
                  <span className="px-3 text-sm"> Sub Interpretation 1</span>
                  <input
                    placeholder="Enter Text here"
                    className="h-[70px] px-3  shadow-lg border mt-2  rounded-xl"
                  />
                </div>
              </div>
              {/* //// */}
              <div>
                <div className="flex items-center h-[20px] space-x-2 mt-6  justify-end">
                  <div className="flex h-[15px]  space-x-3">
                    <IoMdBulb className=" h-full w-full" />{" "}
                    <MdMessage className=" h-full w-full" />
                    <img className="h-full" src="question.png" />
                    <img className="h-full" src="flower.png" />
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-[110px] cursor-pointer rounded-md justify-center space-x-2 px-1 h-[32px] text-[12px] flex items-center text-sm font-semibold   shadow-md border">
                      <span> select Catag</span> <FaChevronDown />
                    </div>
                    <div className="w-[110px]  justify-center cursor-pointer space-x-2 px-1 h-[32px] flex items-center text-[12px] font-semibold rounded-md  shadow-md border">
                      <span> select proces</span> <FaChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="px-8 py-6">
                <button className="bg-[#0129FF] text-sm px-2 py-1 rounded-md text-white">
                  + Sub-thread
                </button>
              </div>
              <div className="px-8">
                <div className="bg-gray-100   flex flex-col h-[105px] justify-end rounded-xl">
                  <span className="px-3 text-sm"> Summary for Thread A1</span>
                  <input
                    placeholder="Enter Text here"
                    className="h-[70px] px-3  shadow-lg border mt-1  rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}
      </div>
      {/* third asset */}
      <div>
        {/* third asset */}
        {asset.asset_type == "input_asset" &&
          asset.asset_content_type == "article" && (
            <div>
              <div className="px-8 justify-start space-y-4 flex my-5  flex-col">
                <h1 className="font-semibold">Title</h1>
                <input className="border h-[43px]  shadow-[-4px_1px_4px_rgba(0,0,0,0.2)]" />
              </div>

              {/* content div */}
              <div>
                <div className="px-8 justify-start space-y-2 flex my-5  flex-col">
                  <h1 className="font-semibold">Content</h1>
                  <div className="border-2 h-full   ">
                    <div className="h-[82px] px-5 shadow-xl z-10  ">
                      <div className="flex mt-2 text-[12px] justify-between text-gray-600 space-x-2 ">
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Insert</span>
                        <span>Formet</span>
                        <span>Tools</span>
                        <span>Table</span>
                        <span>Help</span>
                      </div>
                      <div className="text-gray-500 space-x-4  mt-3  flex">
                        <FiCornerUpLeft className="text-[16px]" />
                        <FiCornerUpRight className="text-[16px]" />{" "}
                        <CgMaximizeAlt className="text-[16px]" />
                        <span className="text-[10px] bg-gray-200 pl-1 pr-8  py-0">
                          Paragraph
                        </span>
                        <BsThreeDots className="text-[16px]" />
                      </div>
                    </div>
                    <input className="border h-[200px] z-0  mt-0 w-full " />
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
      {/* last asset */}
      <div>
        {asset.asset_type == "display_asset" &&
          asset.asset_content_type == "article" && (
            <div className="px-8">
              <div>
                <div className="font-semibold h-[43px] flex  bg-[#F2F2F2]  px-3 space-x-4 items-center">
                  <span>
                    <FaChevronUp />
                  </span>
                  <span>Intoduction</span>
                </div>
                <div className="h-[110px]  ">
                  <h1 className="text-[12px] py-3  mt-2 ">
                    The 4SA Method , How to bring a idea into progress ?
                  </h1>
                  <div className="flex justify-end mt-5">
                    <span className="text-[12px] text-gray-500 font-semibold">
                      See More
                    </span>
                  </div>
                </div>
                {/* / */}
                <div>
                  <div className="font-semibold h-[43px] flex   border  px-3 space-x-4 items-center">
                    <span>
                      <FaChevronUp />
                    </span>
                    <span>Thread A</span>
                  </div>
                  <div className="h-[130px] ">
                    <h1 className="text-[12px] py-3 px">
                      How are you going to develop your stratergy ? Which method
                      are you going to use to develop a stratergy ? What if the
                      project is lengthy?
                    </h1>
                    <div className="flex justify-end ">
                      <span className="text-[12px] text-gray-500 font-semibold">
                        See More
                      </span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="pl-6">
                  <div className="font-semibold h-[43px] flex   border  px-3 space-x-4 items-center">
                    <span>Example</span>
                  </div>

                  <div className="h-[67px]  ">
                    <h1 className="text-[12px] py-3 px">
                      You have a concept , How will you put into progress?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import phone from "../../assets/image.png";
import data from "./Data.json";
import smile from "../../assets/Screenshot 2024-11-28 110053.png";
import { GiPadlock } from "react-icons/gi";
import card from "./Card.json";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import logo from "./logo.json";

const LandinPage = () => {
  return (
    <>
      <div className="w-full min-h-[calc(100%-90px)] bg-[#F2F7F8] flex items-center justify-center ">
        <div className="w-[92%] h-[100%] flex flex-col justify-between items-center mt-[120px]">
          <div className=" flex justify-between items-center w-full min-h-[100vh] ">
            <div className=" w-[60%] mb-[50px] ">
              <div className="">
                {" "}
                <button className="w-[320px] h-[45px] rounded-[100px] text-[15px]  bg-[#0089FF] font-semibold text-white flex items-center justify-center  cursor-pointer hover:bg-black mb-2">
                  {" "}
                  <img
                    src={data[0].svg}
                    alt=""
                    className="hover:text-blue-600 "
                  />
                  <p> {data[0].title1}</p>
                </button>
                <p className="text-[50px] font-bold w-[100%] mb-2 leading-1 ">
                  {data[0].title2}
                </p>
                <p className="text-[20px] font-normal w-[70%] mb-3">
                  {data[0].title3}
                </p>
                <div className="flex gap-3">
                  <button className="w-[140px] h-[50px] rounded-xl text-white font-semibold text-center bg-black hover:animate-bounce transition-all">
                    {data[0].button1}
                  </button>
                  <button className="w-[145px] h-[50px] rounded-xl text-white font-semibold text-center bg-black">
                    {data[0].button2}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src={smile}
                alt=""
                className="w-[100%] h-[60%] animate-slow-bounce mt-[120px] ml-[50px] "
              />
            </div>
          </div>
          <div className="w-full h-[50vh]">
            <div className="mt-[90px]">
              <p className="text-[22px] font-semibold ml-[110px]">
                {data[1].title1}
              </p>
              <div className="flex gap-5">
                {" "}
                <div className="w-[90px] h-[70px] rounded-[25px] bg-white items-center justify-center flex">
                  {" "}
                  <GiPadlock size={30} />
                </div>{" "}
                <p className="w-[48%] text-[15px] mt-3 font-normal">
                  {data[1].title2}
                </p>
              </div>
              <div className="ml-[130px] gap-4 flex">
                {" "}
                <PiArrowBendDownRightBold size={20} />
                <p className="">{data[1].title3}</p>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[100vh] flex flex-col items-center justify-start mb-[200px]">
            <p className="text-[50px] font-semibold mt-[90px]">
              Many ways to build your savings
            </p>
            <p className="text-[22px] font-normal mt-5">
              Earn 12%-20% when you save with any of these PiggyVest plans.
            </p>
            <div className="flex flex-wrap gap-7 items-center justify-center mt-9">
              {card.map((el: any, i: any) => (
                <div className="w-[420px] h-[380px] rounded-[20px]  bg-white">
                  <div className="ml-[25px] mt-[40px]">
                    <p className="text-[30px] font-semibold mb-3">
                      {el.title1}
                    </p>
                    <p className="w-[60%] text-[17px] font-normal">
                      {el.title2}
                    </p>
                  </div>
                  <div className="flex gap-5 mt-[140px] ml-[20px]">
                    <PiArrowBendDownRightBold size={20} />
                    <p className="font-normal">{el.title3}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[120vh] flex items-center justify-center flex-col bg-white">
            <p className="text-center mb-9 mt-[30px]">
              <p className="text-[50px] font-semibold">
                {" "}
                Meet Our Saver of the Month
              </p>
              <p className="text-[25px]">
                Grow your money and invest for your future confidently.
              </p>
            </p>
            <div className="w-[90%] h-[70%] rounded-[25px] bg-[#7913E5] flex">
              <div className="mt-[30px] ml-[50px] w-[40%]">
                <p className="text-[30px] font-semibold text-white mb-6">
                  {data[2].title1}
                </p>
                <p className="text-white font-normal text-[18px] w-[60%]">
                  {data[2].title2}
                </p>
                <div className="flex gap-4 mt-[140px] font-semibold text-white">
                  <PiArrowBendDownRightBold size={20} />

                  <p className="">{data[2].title3}</p>
                </div>
              </div>
              <div>
                <img
                  src={phone}
                  alt=""
                  className="w-[120%] h-[88%] ml-[40px] mt-[50px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full min-h-[120vh] flex items-center justify-center flex-col bg-white">
            <p className="text-center mb-9 flex justify-center items-center flex-col ">
              <p className="text-[50px] font-semibold">
                {" "}
                Meet Our Saver of the Month
              </p>
              <p className="text-[20px] w-[60%] text-center font-normal">
                {" "}
                Every month, we shine a spotlight on one saver, asking them
                about their savings culture and how Piggyvest has helped them.
              </p>
            </p>
            <div className="w-[65%] h-[50vh] rounded-[25px] bg-[#7913E5] flex"></div>
            <div className="w-[100%], h-[70vh] flex justify-center items-center ">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-[90%] h-[30vh]   flex items-center justify-center">
            {logo.map((el: any, i: any) => (
              <div className="w-[15%] h-[15%] flex items-center justify-center gap-5 ">
                <img src={el.img1} alt="" />
                <img src={el.img2} alt="" />
                <img src={el.img3} alt="" />
                <img src={el.img4} alt="" />
                <img src={el.img5} alt="" />
                <img src={el.img6} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandinPage;

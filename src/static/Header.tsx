import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <div className="w-full h-[80px] flex items-center justify-center fixed bg-[#F2F7F8] z-10">
        <div className="w-[92%] h-[100%] flex justify-between items-center ">
          <div className="flex w-[75%] ">
            <div className="w-[20%] text-[20px] font-semibold">XeremeVest</div>
            <div className="flex gap-6 font-semibold text-[#4A5B6B]">
              <p onClick={() => setToggle(!toggle)} className="cursor-pointer">
                Save
              </p>
              {toggle && (
                <div
                  className="w-[500px] h-[280px] rounded-md bg-purple-300 absolute mt-[20px] ml-[190px] left-0 flex items-center justify-center"
                  onClick={() => setToggle(false)}
                >
                  <div className="flex gap-4">
                    <div className=" ">
                      <p>for 3months</p>
                      <p>for 6months </p>
                      <p>for 1year</p>
                    </div>
                    <div>
                      <p>save for school fees</p>
                      <p>save for 5 years</p>
                    </div>
                  </div>
                </div>
              )}

              <p className="cursor-pointer">Invest</p>
              <p className="cursor-pointer">Stories</p>
              <p className="cursor-pointer">FAQs</p>
              <p className="cursor-pointer">Resources</p>
            </div>
          </div>

          <div className="flex w-[25%] gap-4">
            <button className="w-[100px] h-[50px] rounded-xl p-3 border font-semibold border-black">
              Sign in
            </button>
            <button className="w-[200px] p-3 font-bold text-white h-[50px] rounded-xl bg-[#0D1927] outline-none">
              Create free account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

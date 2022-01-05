import React from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";

const PopularExperience = () => {
    return (
        <div>

            <div className='flex justify-between mt-5'>
                <div>
                    <p className='font-semibold text-base'>Popular Experiences</p>
                </div>
                <div className='flex items-center gap-2'>
                    <a href='' className='' style={{ color: "#885FFF", fontSize: "14px" }}> See all</a>
                    <IoChevronForwardSharp className='text-lg' style={{ color: "#6F6E73" }} />
                </div>

            </div>

            <div className='grid grid-cols-7 mt-4 gap-4 items-center '>
                <div className='col-span-2 rounded-lg h-full w-20 flex justify-center items-center'  style={{background: "rgba(0, 192, 139, 0.33)"}}>

                    <div className='flex'>
                        <img src='image/vector-1.png' alt='error' className='rounded-lg mt-4' style={{ width: "30px", height: "20px" }} />
                        <img src='image/pencil.png' alt='error' className='rounded-lg' style={{ width: "15px", height: "30px" }} />
                    </div>

                </div>
                <div className='col-span-4 '>
                    <p className='font-semibold text-base'>DeFi Swap</p>
                    <p style={{ fontSize: "12px", fontWeight: "normal", color: "#6F6E73", marginTop: "5px" }}> Swap you digital assets</p>
                    <a href='#' style={{ fontSize: "12px", fontWeight: "normal", color: "#587BE0" }}>+200 users</a>

                </div>
                <div className='col-span-1 float-right'>
                    <IoChevronForwardSharp className='text-lg' style={{ color: "#6F6E73" }} />

                </div>

            </div>

            <div className='grid grid-cols-7 mt-4 gap-4 items-center '>
                <div className='col-span-2 rounded-lg h-full w-20 flex justify-center items-center'  style={{background: "rgba(0, 192, 139, 0.33)"}}>

                    <div className='flex'>
                        <img src='image/vector-1.png' alt='error' className='rounded-lg mt-4' style={{ width: "30px", height: "20px" }} />
                        <img src='image/pencil.png' alt='error' className='rounded-lg' style={{ width: "15px", height: "30px" }} />
                    </div>

                </div>
                <div className='col-span-4 '>
                    <p className='font-semibold text-base'>DeFi Swap</p>
                    <p style={{ fontSize: "12px", fontWeight: "normal", color: "#6F6E73", marginTop: "5px" }}> Swap you digital assets</p>
                    <a href='#' style={{ fontSize: "12px", fontWeight: "normal", color: "#587BE0" }}>+200 users</a>

                </div>
                <div className='col-span-1 '>
                    <IoChevronForwardSharp className='text-lg' style={{ color: "#6F6E73" }} />

                </div>

            </div>

        </div>
    );
};

export default PopularExperience;
import React from 'react';
import Search from './Search';
import { IoChevronForwardSharp } from "react-icons/io5";
import PopularCatagories from './PopularCatagories';
import PopularExperience from './PopularExperience';
import Link from 'next/link'

const RecentExperience = () => {
    return (
        <div className='mx-4 lg:mx-56'>

            <Search />

            <div className='mt-4'>

                <p className='font-semibold'>Recent Experiences</p>

                <div className='grid grid-cols-7 mt-4 gap-4 items-center '>
                    <div className='col-span-2 rounded-lg' >

                        <img src='image/logo-1.png' alt='error'  className='rounded-lg' style={{width:"93px" , height:"96px"}}/>

                    </div>
                    <div className='col-span-4 '>
                        <p className='font-semibold text-base'>DeFi Swap</p>
                        <p style={{fontSize:"12px" ,fontWeight:"normal" ,color:"#6F6E73",marginTop:"5px"}}> Swap you digital assets</p>
                        <a href='#'  style={{fontSize:"12px" ,fontWeight:"normal" ,color:"#587BE0"}}>+200 users</a>

                    </div>
                    <div className='col-span-1 '>
                        <IoChevronForwardSharp  className='text-lg absolute right-4 lg:right-60' style={{color:"#6F6E73"}}/>

                    </div>

                </div>
               <Link href="/documentSign">
               <div className='grid grid-cols-7 mt-4 gap-4 items-center '>
                   
                   <div className='col-span-2 rounded-lg' >
                       <img src='image/logo-2.png' alt='error'  className='rounded-lg' style={{width:"93px" , height:"96px"}}/>
                   </div>
                   <div className='col-span-4 '>
                       <p className='font-semibold text-base'>DeFi Sign</p>
                       <p style={{fontSize:"12px" ,fontWeight:"normal" ,color:"#6F6E73",marginTop:"5px"}}> Swap you digital assets</p>
                       <a href='#'  style={{fontSize:"12px" ,fontWeight:"normal" ,color:"#587BE0"}}>+1K users</a>

                   </div>
                   <div className='col-span-1 '>
                       <IoChevronForwardSharp  className='text-lg absolute right-4 lg:right-60' style={{color:"#6F6E73"}}/>

                   </div>
                   

               </div>
               </Link>

            </div>

            <PopularCatagories />

            <PopularExperience />







        </div>
    );
};

export default RecentExperience;
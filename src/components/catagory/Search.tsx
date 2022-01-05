import React from 'react';
import { BiFilterAlt } from "react-icons/bi";

const Search = () => {
    return (
        <div >

            <div className='grid grid-cols-8 items-center mt-4 gap-4'>

                <div className='col-span-7'>
                
               <div className='relative'>
               <img src='image/searchIcon.png' alt='error' className='h-4 w-4 absolute left-2' style={{marginTop:"10px"}}/>
                <input placeholder='Search Experiences' className='w-full pl-8 h-10 rounded-lg ' style={{background:"#F5F5F5",fontWeight:"500"}}/>
               </div>
                   
                </div>
                <div className='col-span-1'>
                  <BiFilterAlt  className='text-2xl' style={{color:"#6F6E73"}}/>
                </div>

            </div>
            
        </div>
    );
};

export default Search;
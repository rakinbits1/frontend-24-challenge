import React from 'react';
import { IoChevronForwardSharp } from "react-icons/io5";
import {allCategories} from '../constants/staticData'

const PopularCatagories = () => {

    console.log(allCategories,'data')
    return (
        <div > 
             <div className='flex justify-between mt-5'>
                <div>
                    <p className='font-semibold text-base'>Popular Categories</p>
                </div>
                <div className='flex items-center gap-2'>
                    <a href='' className='' style={{color:"#885FFF" , fontSize:"14px"}}> See all</a>
                    <IoChevronForwardSharp  className='text-lg' style={{color:"#6F6E73"}}/>
                </div>

            </div>

            <div className='grid grid-cols-2 gap-4 mt-4'>

                {allCategories[0]?.subcategories?.map((item :any,index)=>{
                    return(
                        <div className='p-4 rounded-lg' style={{background: `${item.lightcolor}`}}>
                        <div className='h-12 w-12 rounded-full flex justify-center items-center' style={{background: `${item.darkcolor}`}}> 
                          <img src='image/upIndicator.png' alt='error'  className='rounded-lg h-10 w-10'   />
                        </div>
                        <div className='flex mt-4 items-center justify-between'>
                            <p  className='font-semibold text-lg'  style={{color:"#6F6E73"}}> {item.name}</p>
                            <IoChevronForwardSharp  className='text-lg' style={{color:"#6F6E73"}}/>
                        </div>
                    </div>

                    )
                })}

               

                
               
            </div>
            
        </div>
    );
};

export default PopularCatagories;
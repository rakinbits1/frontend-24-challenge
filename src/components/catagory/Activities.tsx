import React from 'react';
import { allColors } from '../constants/color';
import { activities } from '../../Data/staticData';

const Activities = () => {

    console.log(activities)
    return (
        <div className='mx-4 lg:mx-56'>

            <div className='flex justify-center items-center rounded-full' >

                <p className='p-1 px-4 rounded-full' style={{ background: "#F5F5F5", color: allColors.blackLight }}> {activities.length} activity found </p>

            </div>



            {activities.map((item, index) => {
                return (
                    <div key={index} className='grid grid-cols-6 items-center mt-4'>
                        <div className='col-span-1'>
                            <img src='image/logo-3.png' alt='error' className='w-12 h-12' />
                        </div>
                        <div className='col-span-5'>
                            <p style={{ color: allColors.blackDark, fontSize: "16px" }}> <span style={{ color: allColors.blue }}> johndoe.near </span> signed the contract successfully</p>
                            <p style={{ color: allColors.blackLight, fontSize: "15px" }}>{item.duration} days ago</p>
                        </div>

                    </div>
                )
            })}



        </div>
    );
};

export default Activities;
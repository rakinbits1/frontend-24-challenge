import React, { FC } from 'react';
import Menue from './Menue'

interface Props {

}

const Heater: FC<Props> = () => {
     return (
          <div className='w-full px-4 py-4 lg:px-56' style={{backgroundColor:"#F5F5F5"}}>
               <div className='grid grid-cols-8 gap-2 items-center ' >
                    <div className='col-span-1'>
                         <img src='image/leftArrow.png' alt='error'  className='w-7'/>
                    </div>
                    <div className='col-span-1'>
                         <img src='image/homeIcon.png' alt='error' />
                    </div>
                    <div className='col-span-4'>
                         <Menue />
                         {/* <select className="select select-bordered select-secondary w-full  rounded-full">
                              <option >Choose your superpower</option>
                              <option>telekinesis</option>
                              <option>time travel</option>
                              <option>invisibility</option>
                         </select> */}
                    </div>
                    <div className='col-span-1'>
                         <img src='image/notification.png' alt='error' className='w-8 h-8' />
                    </div>
                    <div className='col-span-1'>
                         <img src='image/settings.png' alt='error'  className='w-8 h-8'/>
                    </div>

               </div>

          </div>
     );
};

export default Heater;
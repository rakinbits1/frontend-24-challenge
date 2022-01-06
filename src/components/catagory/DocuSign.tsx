import React, { useState } from 'react';
import { RiShareBoxLine } from "react-icons/ri";
import { ImArrowUpRight2 } from "react-icons/im";
import { allColors } from '../constants/color';
import { NavMobile, TabMobile, ContentMobile } from './styled';
import OverView from './OverView';
import Activities from './Activities';

const DocuSign = () => {

    const tabs = ['Details', 'Activities']
    const [activeTabIndex, setActiveTabIndex] = useState(0);
 



    return (
        <div>
            <div className='w-full h-16 ' style={{ background: "#E5D0FF" }}>

            </div>
            <div className='flex justify-between items-center'>
                <img src='image/logo-2.png ' alt='error' className='rounded-lg ml-4 -mt-6' style={{ width: "75px", height: "75px" }} />
                <div className='flex items-center gap-2'>
                    <RiShareBoxLine className='text-base font-bold ' style={{ color: "#587BE0", fontWeight: "600" }} />
                    <a href='#' className='text-base font-semibold mr-6' style={{ color: "#587BE0" }}>Share</a>
                </div>
            </div>
            <div className='mx-4 lg:mx-56 mt-4'>
                <p className='text-lg font-semibold' style={{ color: allColors.blackDark }}>Docu sign</p>
                <p style={{ color: allColors.blackLight, fontWeight: "500", fontSize: "14px" }}> sign smart contracts seamlessly</p>
                <a href='#' style={{ color: allColors.blue, fontWeight: "500", fontSize: "14px" }}>Utilities</a>
            </div>
            <div className='mx-4 lg:mx-56 mt-4 grid grid-cols-6'>
                <div className='col-span-2'>
                    <div className='flex justify-between items-center p-3 mx-3 text-white rounded-md' style={{ background: allColors.blackDark }}>
                        <p >Open</p>
                        <ImArrowUpRight2 className='text-sm ' style={{ color: "white", fontWeight: "800" }} />
                    </div>

                </div>
                <div className='col-span-3 flex items-center gap-1'>
                    <img src='image/person.png' alt='error' className='h-4 w-4' style={{}} />
                    <p style={{ color: allColors.blackLight, fontWeight: "500" }} className='text-sm'>24,000+ users</p>

                </div>
                <div className='col-span-1'>

                </div>

            </div>



            <ContentMobile>
                <NavMobile>
                    {tabs.map((tab, i) => (
                        <TabMobile active={activeTabIndex === i} key={i} onClick={() => setActiveTabIndex(i)}>
                            {tab}
                        </TabMobile>
                    ))}
                </NavMobile>
                {activeTabIndex === 0 ? (
                    <OverView />
                ) : null}
                {activeTabIndex === 1 ? <Activities /> : null}
              
            </ContentMobile>


        </div>
    );
};

export default DocuSign;
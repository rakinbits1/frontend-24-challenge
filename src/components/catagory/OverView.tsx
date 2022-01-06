import React from 'react';
import { allColors } from '../constants/color';

const OverView = () => {
    return (
        <div>

<div className="collapse w-full mt-4 collapse-arrow" style={{ background: "none" }}>
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        <p className='font-semibold text-base' style={{ color: allColors.blackDark }}>Overview</p>
                    </div>
                    <div className="collapse-content ">
                        <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using

                        </p>
                        <div className='flex gap-2 items-center mt-4'>
                            <img src='image/world.png' alt='error' style={{ width: "22px", height: "22px" }} />
                            <a href='#' className='font-normal text-sm' style={{ color: allColors.blue }}> https://docusignn.io</a>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default OverView;
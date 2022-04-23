import React from 'react';

const CustomCursor = (props) => {
     const { points, height } = props;
     const { x, y } = points[0];

     return (
          <svg width="85" x={x - 40} y={y} height={height} viewBox={`0 0 85 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
               <defs>
                    <linearGradient id="paint0_linear_385_600" x1="43" y1="171" x2="43" y2="-1.66804e-07" gradientUnits="userSpaceOnUse">
                         <stop stopColor="#254BD1" stopOpacity="0.18"/>
                         <stop offset="1" stopColor="#254BD1" stopOpacity="0"/>
                    </linearGradient>
               </defs>
               <rect opacity="0.8" width="85" height={height} rx="8" fill="url(#paint0_linear_385_600)"/>
          </svg>
     )
}

export default CustomCursor;
import React from 'react'

import gurl from '../../assets/GIF/gurl.gif'
import CoursesContent from '../Molecules/CoursesContent'
import Divider from '../Atoms/Divider'


function HomePage() {
    return (
        <>
     <div className=' py-5'>
 <h1 className="text-[100px] text-orange-500 font-extrabold  animate__animated animate__bounceInDown p-10"  style={{ textShadow: '2px 2px 3px rgba(0,0,0,0.3)' }}>
         <span className=""> Flexy{" "}</span>
          <div className=" animate__animated animate__jackInTheBox  animate__repeat-1">
            Language
          </div>
        </h1>
     </div>

     <CoursesContent/>
   
        </>
    )
}

export default HomePage

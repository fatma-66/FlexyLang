import React from 'react'

function MainTitle({title,src}) {
    return (
      <>
<div className='flex flex-row gap-3 items-center'>
    <img src={src}  alt=''/>
<h1>
   {title} 
</h1>
</div>
      </>  
    )
}

export default MainTitle

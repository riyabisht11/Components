import React from 'react'
import SideBar from './SideBar'
import Home from './Home'

function Campaign() {
  return (
    <div className='max-w-screen-2xl mx-auto overflow-hidden'>
        <div className=''>
            {/* sidebar */}
            <div className='flex '>
                <SideBar />
                <Home/>
            </div>
        </div>
        
      
    </div>
  )
}

export default Campaign

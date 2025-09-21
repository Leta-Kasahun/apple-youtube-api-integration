import React from 'react'
import AppleNavbar from './AppleApiIntegration/AppleNavbar'
import AppleHome from './AppleApiIntegration/AppleHome'
import AppleFooter from './AppleApiIntegration/AppleFooter'
import Youtube from './AppleApiIntegration/Youtube'
function App() {
  return (
    <div className='bg-black text-white m-2 pl-4'>
      <AppleNavbar />
      <AppleHome />
     
      <Youtube/>
      <AppleFooter />
    </div>
  )
}

export default App
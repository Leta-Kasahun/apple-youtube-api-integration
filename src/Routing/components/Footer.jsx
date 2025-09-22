import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-600 h-40'>
        <footer>
            <p className='text-white flex items-center p-10'>&copy; {new Date().getFullYear()}. Allrights reseved React routing</p>
        </footer>


    </div>
  )
}

export default Footer
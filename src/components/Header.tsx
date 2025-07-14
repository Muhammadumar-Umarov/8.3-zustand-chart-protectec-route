import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='h-[70px] bg-indigo-400 '>
      <div className='container mx-auto flex items-center justify-between h-full text-white'>
        <h2 className='text-3xl font-bold '>Header</h2>
       <ul className='flex items-center gap-6'>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/statistics"}>Statisticst</Link>
        </li>
       </ul>
      </div>
    </header>
  )
}

export default React.memo(Header)
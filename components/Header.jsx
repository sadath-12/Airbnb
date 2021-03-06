import Image from 'next/image'
import React from 'react'
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white px-5 py-3 shadow-lg md:px-10 items-center">
      {/* left */}
      <div className="relative flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow bg-transparent pl-5 outline-none text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 lg:inline-flex" />
      </div>

      {/* right */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
<p className='hidden md:inline cursor-pointer'>Become a host</p>
<GlobeAltIcon className='h-6'/>

<div className='flex items-center space-x-2 border-2 rounded-full p-1'>
    <MenuIcon  className='h-6' />
    <UserCircleIcon className='h-6' />
</div>

      </div>
    </header>
  )
}

export default Header

'use client'  
import Link from 'next/link'
import React, { useState } from 'react'
import SearchBar from './search-bar'


const Header = () => {
  return (
    <div>
      <nav className=' flex flex-col justify-center'>
        <Link className=' text-3xl' href="/">Book Verse</Link>
        <SearchBar/>
      </nav>
    </div>
  )
}

export default Header

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='border-t'>
       <div className='flex flex-center wrapper flex-between p-5 text-center sm:flex-row flex-col gap-4'>
        <Link href='./'>
        <Image src='./assets/images/logo.svg' alt='logo' width={128} height={128}/>
        </Link>
        <p>2024 Event. All Rights reserved</p>
       </div>
    </footer>
  )
}

export default Footer
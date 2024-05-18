import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/' className='w-36 p-3'>
          <Image src='/assets/images/logo.svg' alt='logo' width={126} height={126} />
        </Link>

        <SignedIn>
          <nav className='hidden md:flex w-full max-w-xs '>
            <NavItems/>
          </nav>
        </SignedIn>
        
        <div className="flex w-32 justify-end m-2">
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
            <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size='lg'>
          <Link href='/sign-in' className='m-2'>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
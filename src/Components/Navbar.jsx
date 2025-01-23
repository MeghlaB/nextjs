"use server"
import { getKindeServerSession, LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import React, { use } from 'react';
import { Button } from './ui/button';


const  Navbar = async() =>{
 const {getUser} = getKindeServerSession()
 const user =  await getUser()
 console.log('user data',user)
  return (
    <div className='bg-base-200'>
      <nav className='container mx-auto flex items-center justify-between py-4 px-3 lg:px-0'>
        <div>
          <h1 className="text-xl">Project</h1>
        </div>
        <div>
          <ul className='flex items-center gap-3'>
            <li><Link href='/'>
              <Button>Home</Button>
            </Link></li>
            <li><Link href='/profile'>
              <Button>Profile</Button>
            </Link></li>
            {user ? (
              <>
                <LogoutLink>Log out</LogoutLink>
              </>
            ) : (
              <>
                <LoginLink>Sign in</LoginLink>
                <RegisterLink>Sign up</RegisterLink>
              </>
            )}

          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;


import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import React, { use } from 'react';

function Navbar() {
const {getUser} =getKindeServerSession()
const user  = getUser()
console.log(user)
  return (
    <div className='bg-base-200'>
      <nav className='container mx-auto flex items-center justify-between py-4'>
        <div>
          <h1 className="text-xl">Project</h1>
        </div>
        <div>
          <ul className='flex items-center gap-3'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/profile'>Profile</Link></li>
            
             {
                user?<>
                <li><Link href="/api/auth/logout">Logout</Link></li>
                </>:
                <>
                   <Link href="/api/auth/register">Sign UP</Link>
                 <li><Link href="/api/auth/login">Login</Link></li>
            
                </>
             }
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;

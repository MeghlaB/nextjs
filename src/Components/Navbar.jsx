import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
        <div>
            <h1 className="text-xl">Project</h1>
        </div>
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

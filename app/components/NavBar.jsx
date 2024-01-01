'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

function NavBar() {
    const pathName = usePathname();
    return (
        <header className='header'>
            <Link href="/" className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold
            shadow-md'>
                <p className=' blue-gradient_text'>AH</p>
            </Link>
            <nav className='flex text-lg gap-7 font-medium'>
                <Link href='/about' className={pathName== "/about" ? 'text-blue-500' :'text-black'}>
                    about
                </Link>
                <Link href='/project' className={pathName== "/project" ? 'text-blue-500' :'text-black'}>
                    project
                </Link>
                
            </nav>
        </header>
    )
    }

export default NavBar
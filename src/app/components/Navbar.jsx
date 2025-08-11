'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    if (!pathName.includes('dashboard')) {
        return (
            <div>
                <nav>
                    <ul className="flex gap-5">
                        <Link href='/'><li>Home</li></Link>
                        <Link href='/about'><li>About</li></Link>
                        <Link href='/services'><li>Service</li></Link>
                        <Link href='/profile'><li>Profile</li></Link>
                        <Link href='/post'><li>Post</li></Link>
                        <Link href='/login'><li>Login</li></Link>
                        <Link href='/register'><li>Register</li></Link>
                        <Link href='/dashboard'><li>Dashboard</li></Link>
                    </ul>
                </nav>
            </div>
        );   
    } else {
        return <></>
    }
};

export default Navbar;
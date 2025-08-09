"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter();
    const isLoggedIn = true;
    const handleAddress = () => {
        if (isLoggedIn) {
            router.push("/about/address");
        } else {
            router.push("/");
        }
    }
    return (
        <div>
            <Link href='/about/address'>Address</Link>
            <h1>About page.</h1>
            <button type='button' onClick={handleAddress}>Address page button</button>
        </div>
    );
};

export default AboutPage;
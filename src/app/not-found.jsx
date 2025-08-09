import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div>
                <h1>404</h1>
                <h1>Khoje pailam na!</h1>
                <Link href='/'>
                    Bhai barite fire jan.
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage404;
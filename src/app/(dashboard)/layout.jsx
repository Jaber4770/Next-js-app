import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                {/* website nav */}
                <div className="col-span-3 h-screen bg-gray-100 p-2">
                    <ul>
                        <li>user list</li>
                        <li>user list</li>
                        <li>user list</li>
                        <li>user list</li>
                    </ul>
                </div>
                {/* website content */}
                <div className='col-span-9'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
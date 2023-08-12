import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const LoginLayout = () => {
    return (
        <div className='bg-light'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;
import { Outlet } from 'react-router-dom';
import {Footer, Navbar} from "./src/components/"
import React from 'react';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                {/* represents all the children */}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
import { Outlet } from 'react-router-dom';
import {Footer, Navbar} from "./src/components/"
import {Navigate} from "react-router-dom";

export const Layout = () => {
    const checkCookiePresence = (name: string) => {
        const cookies = document.cookie.split('; ');
        return cookies.some(cookie => cookie.startsWith(name + '='));
      };
    
//check authentification cookie presence
        const isCookiePresent = checkCookiePresence('token');
       
    return (
        <>
            <Navbar />
            <main style={{minHeight:"580px"}}>
                {/* check if user is authenticated */}
                {isCookiePresent ? <Outlet />: <Navigate  to= "/login"/>}
                
            </main>
            <Footer />
        </>
    )
}
import { useLocation, Outlet, useNavigate, Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setPrevUrl } from "../api/navSlice";


const RequireAuth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const checkCookiePresence = (name: string) => {
        const cookies = document.cookie.split('; ');
        return cookies.some(cookie => cookie.startsWith(name + '='));
      };
    
      const handleCheckPresence = () => {
        const isCookiePresent = checkCookiePresence('exampleCookie');
        console.log('Cookie is present:', isCookiePresent);
      };

    const reroute = () => {
        // dispatch(setPrevUrl(location.pathname));
        return <Navigate to="/auth/sign-in"/>
    }
// isCookiePresent ? <Outlet /> : reroute();
    return <Outlet />

}

export default RequireAuth;


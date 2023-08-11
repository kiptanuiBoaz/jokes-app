import React from 'react';
import "./login.scss";

const Login: React.FC = () => {
    const setCookie = (name: string, value: string, days: number) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);

        const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');

        document.cookie = `${name}=${cookieValue}; path=/`;
    };

    const handleClick = () => {
        setCookie('exampleCookie', 'Hello, Cookie!', 7); // Set cookie named 'exampleCookie' with value 'Hello, Cookie!' that expires in 7 days
    };

    return (
        <button onClick={handleClick}>Set Cookie</button>
    )
}

export default Login;
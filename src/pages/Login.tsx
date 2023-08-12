import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { v4 } from "uuid";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('prefilled@gmail.com');
    const [password, setPassword] = useState('pReFiLl@123');
    const navigate = useNavigate();

    //set cookie in the browser
    const setCookie = (name: string, value: string, days: number) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
        document.cookie = `${name}=${cookieValue}; path=/`;

        //attempt access after login
        navigate("/");
    };

    return (
        <div className="login-form-container">

            <h1 className='logo'>Login</h1>

            <form className="login-form">
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled
                        required
                    />
                </label>
                <button
                    onClick={(e: React.FormEvent) => {
                        e.preventDefault();
                        setCookie('token', v4(), 7);
                    }}
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;

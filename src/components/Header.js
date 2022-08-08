import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const getHeaderButton = () => {
        if (window.location.pathname === '/') {
            return (
                <Link  to="/board" className="container__link" >
                    <span className="container__button">Click to Play</span>
                </Link>
            );
        } else {
            return (
                <Link  to="/" className="container__link" >
                    <span className="container__button">Home</span>
                </Link>
            )
        }
    }
    return (
        <header className="header">
            <div className="header__logo">
                
            </div>
            {getHeaderButton()}
        </header>
    )
}
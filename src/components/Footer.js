import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <div className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Developed by <a href="#" className="footer__link">Rohit Ranjan</a> for any personal and commercial use.
                    </p>
                </div>
            </div>
        </footer>
    )
}
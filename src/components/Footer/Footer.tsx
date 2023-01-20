import React from 'react';

import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <section className="footer__wrapper">
                <p className="footer__text">Powered by</p>
                <address className="footer__social">
                    <a
                        className="footer__link"
                        target="_blank"
                        href="https://github.com/dxshulya"
                        rel="noreferrer"
                    >
                        dxshulya
                    </a>
                </address>
            </section>
        </footer>
    );
};

export default Footer;

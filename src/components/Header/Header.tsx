import React from 'react';

import {NavLink} from 'react-router-dom';

import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <section className="header__wrapper">
                <div className="logo">
                    <p className="logo__text">Houston, we have a problem.</p>
                </div>
                <nav className="nav">
                    <ul className="nav__menu">
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="/"
                            >
                                PICTURE OF THE DAY
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="Photos"
                            >
                                MARS ROVER PHOTOS
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink
                                className="nav__link"
                                to="Weather"
                            >
                                MARS WEATHER
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
};

export default Header;

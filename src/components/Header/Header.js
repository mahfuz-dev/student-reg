import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Student Attendance</a>
                {/* <a href=""></a>
                <a href=""></a> */}
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css'
import Logo from './../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className='Header'>
            <img src={Logo} alt="" />
            <div className="nav_bar">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Menegment</a>

            </div>
            <div className="search_box">
                <input type="text" placeholder='Search '/>
                <FontAwesomeIcon className='search_icon' icon={faSearch}/>
            </div>
        </div>
    );
};

export default Header;
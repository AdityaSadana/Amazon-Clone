import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import './Header.css';
import { auth } from './firebase';

function Header() {
    const [{basket, user}] = useStateValue();
    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" 
                src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg" 
                alt="Amazon" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" placeholder="What are you looking for?" />
                <SearchIcon className="header_searchIcon" />
            </div>
            
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_option">
                    <span className="header_optionLineOne">Hello {user?.email}</span>
                    <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header

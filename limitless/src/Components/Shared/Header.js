import React from 'react'
import '../../Stylesheets/Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Management/StateProvider';


const Header = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img className="header-logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <Link to="/login">
                    <div className="header-option">
                        <span className="header-optionLine1">
                            Hello Guest
                    </span>
                        <span className="header-optionLine2">
                            Sign In
                    </span>
                    </div>
                </Link>
                <div className="header-option">
                    <span className="header-optionLine1">
                        Returns
                    </span>
                    <span className="header-optionLine2">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLine1">
                        Your
                    </span>
                    <span className="header-optionLine2">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header-optionBasket">
                        <ShoppingCartIcon />
                        <span className="header-optionLine2 header-basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header;

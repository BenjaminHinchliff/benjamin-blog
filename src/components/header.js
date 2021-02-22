import * as React from 'react';
import headerStyles from "./header.module.css";
import order from '../images/order.svg';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <h1 className={headerStyles.name}><Link to="/">Benjamin Hinchliff</Link></h1>
            <img src={order} height={100} alt="order" />
        </div>
    );
}

export default Header;

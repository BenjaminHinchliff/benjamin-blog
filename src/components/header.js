import * as React from 'react';
import headerStyles from './header.module.css';
import cat from '../images/polygonal-cat.svg';
import {Link} from 'gatsby';

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.name}>
        <Link to="/">Benjamin Hinchliff</Link>
      </h1>
      <img src={cat} height={100} width={100} alt="order" />
    </div>
  );
};

export default Header;

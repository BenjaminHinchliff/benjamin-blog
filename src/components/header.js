import * as React from 'react';
import headerStyles from './header.module.css';
import cat from '../images/polygonal-cat.svg';
import {Link} from 'gatsby';

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Link className={headerStyles.headerLink} to="/">
        <h1 className={headerStyles.name}>
          Benjamin Hinchliff
        </h1>
        <img
          className={headerStyles.logo}
          src={cat}
          height={100}
          width={100}
          alt="polyogonal cat"
        />
      </Link>
    </div>
  );
};

export default Header;

import * as React from 'react';
import {Link} from 'gatsby';
import navStyles from './nav.module.css';

const Nav = ({to, children}) => {
  return (
    <nav>
      <ul className={navStyles.outer}>
        <li className={navStyles.inner}>
          <Link className={navStyles.link} to={to}>
            {children}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

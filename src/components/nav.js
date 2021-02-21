import { Link } from 'gatsby';
import * as React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/blog">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

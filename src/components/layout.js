import * as React from 'react';
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from './footer';
import layoutStyles from './layout.module.css';

const Layout = ({ title, location, children }) => {
    return (
        <main>
            <title>{title}</title>
            <Header />
            {(() => {
                if (location.pathname === "/") {
                    return <Nav to="/projects">Projects</Nav>;
                } else {
                    return <Nav to="/">Blog</Nav>;
                }
            })()}
            <div className={layoutStyles.content}>
                {children}
                <Footer />
            </div>
        </main>
    );
}

export default Layout;

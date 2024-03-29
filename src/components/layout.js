import * as React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from './footer';
import layoutStyles from './layout.module.css';

const Layout = ({title, description, location, children}) => {
  return (
    <main>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <Header />
      {(() => {
        if (location.pathname === '/') {
          return <Nav to="/blog">Blog</Nav>;
        } else {
          return <Nav to="/">Projects</Nav>;
        }
      })()}
      <div className={layoutStyles.content}>
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;

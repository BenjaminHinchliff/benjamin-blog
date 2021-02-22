import * as React from 'react';
import footerStyles from './footer.module.css';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <hr />
            <p className={footerStyles.attribution}>Cat icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
            <p className={footerStyles.copyright}>Copyright © 2020 Benjamin Hinchliff</p>
        </div>
    );
};

export default Footer;

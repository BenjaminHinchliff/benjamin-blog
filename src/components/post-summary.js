import { Link } from 'gatsby';
import * as React from 'react';

const PostSummary = ({ title, date, exerpt, slug }) => {
    return (
        <div>
            <h2><Link to={slug}>{title}</Link></h2>
            <h3>{date}</h3>
            <div dangerouslySetInnerHTML={{ __html: exerpt }} />
        </div>
    );
};

export default PostSummary;

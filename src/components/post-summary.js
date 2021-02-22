import {Link} from 'gatsby';
import * as React from 'react';
import postStyles from './post-summary.module.css';

const PostSummary = ({title, date, excerpt, slug}) => {
  return (
    <div>
      <h2 className={postStyles.title}><Link to={slug}>{title}</Link></h2>
      <h3 className={postStyles.date}>{date}</h3>
      <div dangerouslySetInnerHTML={{__html: excerpt}} />
    </div>
  );
};

export default PostSummary;

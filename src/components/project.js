import * as React from 'react';
import {Link} from 'gatsby';

const Project = ({name, url, description}) => {
  return (
    <div>
      <h3><Link to={url}>{name}</Link></h3>
      <p>{description ?? '(no description)'}</p>
    </div>
  );
};

export default Project;

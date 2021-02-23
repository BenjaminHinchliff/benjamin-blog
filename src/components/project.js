import * as React from 'react';

const Project = ({name, url, description}) => {
  return (
    <div>
      <h3><a href={url}>{name}</a></h3>
      <p>{description ?? '(no description)'}</p>
    </div>
  );
};

export default Project;

import * as React from 'react';
import projectStyles from './project.module.css';

const Project = ({name, url, description}) => {
  return (
    <div>
      <h3 className={projectStyles.link}>
        <a href={url} rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <p className={projectStyles.description}>
        {description ?? '(no description)'}
      </p>
    </div>
  );
};

export default Project;

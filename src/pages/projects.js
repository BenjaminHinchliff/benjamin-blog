import * as React from 'react';
import Layout from '../components/layout';

const ProjectsPage = ({location}) => {
  return (
    <Layout title="Projects" description="Projects age" location={location} >
      <p>All my projects are on my <a href="https://github.com/BenjaminHinchliff/" rel="noopener noreferrer">Github</a></p>
    </Layout>
  );
};

export default ProjectsPage;

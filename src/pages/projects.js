import * as React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Nav from '../components/nav';

const ProjectsPage = ({ location }) => {
    return (
        <Layout title="Projects" location={location} >
            <p>All my projects are on my <a href="https://github.com/BenjaminHinchliff/" rel="noopener noreferrer">Github</a></p>
        </Layout>
    );
}

export default ProjectsPage;

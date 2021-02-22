import * as React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';

const ProjectsPage = () => {
    return (
        <main>
            <title>Projects</title>
            <Header />
            <Nav to="/">Blog</Nav>
        </main>
    );
}

export default ProjectsPage;

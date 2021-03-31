import * as React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';
import ListComponent from '../components/list-component';

const ProjectsPage = ({data, location}) => {
  const repos = data.githubData.data.user.repositories.edges;

  return (
    <Layout title="Projects" description="Projects age" location={location} >
      <h2>Recently Edited Projects:</h2>
      <p>A complete list can be found on my
        {' '}
        <a href="https://github.com/BenjaminHinchliff?tab=repositories" rel="noopener noreferrer">
          Github
        </a>
      </p>
      <ListComponent>
        {repos.map(({node: {id, ...repo}}) => <Project key={id} {...repo} />)}
      </ListComponent>
    </Layout>
  );
};

export const query = graphql`
  {
    githubData {
      data {
        user {
          repositories {
            edges {
              node {
                id
                name
                url
                description
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPage;

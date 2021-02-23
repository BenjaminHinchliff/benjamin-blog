import * as React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import ListComponent from '../components/list-component';
import PostSummary from '../components/post-summary';

const IndexPage = ({data, location}) => {
  const posts = data.allWpPost.nodes;

  return (
    <Layout title="Benjamin's Blog" description="Homepage" location={location}>
      <ListComponent>
        {posts.map(({id, ...post}) => <PostSummary key={id} {...post} />)}
      </ListComponent>
    </Layout>
  );
};

export const query = graphql`
  {
    allWpPost(sort: {fields: date, order: DESC}) {
      nodes {
        id
        slug
        title
        date(formatString: "DD MMMM, YYYY")
        excerpt
      }
    }
  }
`;

export default IndexPage;

import * as React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import postStyles from './blog-post.module.css';

const BlogPost = ({data, location}) => {
  const {title, date, content} = data.allWpPost.nodes[0];
  return (
    <Layout
      title={`Benjamin's Blog - ${title}`}
      description="Blog Post"
      location={location}
    >
      <h2 className={postStyles.title}>{title}</h2>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    allWpPost(filter: { id: { eq: $id } }) {
      nodes {
        title
        date(formatString: "DD MMMM, YYYY")
        content
      }
    }
  }
`;

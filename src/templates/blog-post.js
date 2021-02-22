import * as React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
    const post = data.allWpPost.nodes[0];
    console.log(post);
    return (
        <main>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </main>
    );
};

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    allWpPost(filter: { id: { eq: $id } }) {
      nodes {
        title
        content
      }
    }
  }
`;

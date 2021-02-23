module.exports = {
  siteMetadata: {
    title: 'Benjamin\'s Blog',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'https://wordpress.benjaminhinchliff.com/graphql',
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.TOKEN,
        graphQLQuery: `
        query ($author: String = "", $userFirst: Int = 0) {
          user(login: $author) {
            repositories(
              first: $userFirst,
              orderBy: {field: PUSHED_AT, direction: DESC},
              privacy: PUBLIC
            ) {
              edges {
                node {
                  id
                  name
                  description
                  url
                }
              }
            }
          }
        }`,
        variables: {
          author: 'BenjaminHinchliff',
          userFirst: 10,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    },
  ],
};

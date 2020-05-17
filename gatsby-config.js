module.exports = {
  siteMetadata: {
    title: `froehlich.network`,
    description: `The portfolio site of Alexander Fröhlich.`,
    author: `Froehlich Alexander`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};

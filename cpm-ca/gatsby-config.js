module.exports = {
  siteMetadata: {
    title: 'PSY-SCAN INSTITUTE',
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      },
      `gatsby-plugin-netlify`
  ],
}

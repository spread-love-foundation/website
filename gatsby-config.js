module.exports = {
  siteMetadata: {
    title: `Spread Love Foundation`,
    description: `We are Spread Love Foundation`,
    author: `@xavierboudreau`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SLF-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `spreadlovewebsite`,
        schemas: {
          about_us: require("./src/schemas/about_us.json"),
          contact_us: require("./src/schemas/contact_us.json"),
          donate: require("./src/schemas/donate.json"),
          homepage: require("./src/schemas/homepage.json"),
          outreach: require("./src/schemas/outreach.json"),
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

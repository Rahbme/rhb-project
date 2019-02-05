module.exports = {
  siteMetadata: {
    title: "رحب",
    siteUrl: "https://www.rahb.app"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "رحب",
        short_name: `رحب`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#9fe5ed`,
        display: `standalone`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: `لوحة التحكم`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false
      }
    },
    `gatsby-plugin-catch-links`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};

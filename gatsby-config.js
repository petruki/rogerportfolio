/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Roger\'s Portfolio',
    description: 'Welcome to my Portfolio Website. Find out more about me and my projects.',
    author: 'Roger Floriano',
    image: 'https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/roger.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-use-query-params',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Roger\'s Portfolio Website',
        short_name: 'My Portfolio',
        start_url: '/?card=1',
        background_color: '#1a1a1a',
        theme_color: '#1a1a1a',
        display: 'standalone',
        icon: 'src/images/icon.png',
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/']
      }
    },
  ],
  pathPrefix: '/rogerportfolio',
};

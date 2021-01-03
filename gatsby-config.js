/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'Roger\'s Portfolio',
    description: 'Welcome to my Portfolio Website. Find out more about me and my projects.',
    author: 'Roger Floriano',
    image: 'https://raw.githubusercontent.com/petruki/rogerportfolio/master/src/images/roger.png'
  },
  plugins: [
    'gatsby-plugin-remove-serviceworker',
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
        name: 'Roger\'s Portfolio',
        short_name: 'My Portfolio',
        start_url: '/?view=card',
        background_color: '#1a1a1a',
        theme_color: '#1a1a1a',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll'
  ],
  pathPrefix: '/rogerportfolio',
};

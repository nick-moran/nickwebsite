require('dotenv').config();

module.exports = {
  plugins:[
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: process.env.COSMIC_BUCKET_SLUG,
        objectTypes:['pages','techcards','projectyears'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        }
      }
    },
    `gatsby-plugin-react-helmet`,
  ]
}

module.exports = {
  plugins:[
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: 'aee00170-b18a-11e9-95f9-f3971a8ffce1',
        objectTypes:['pages','techcards','projectyears'],
        apiAccess: {
          read_key: '83dBrGd302PPdbGGPjc9yqHsF1gylFsTMQRkX55gQzj1L37ovR'
        }
      }
    },
    `gatsby-plugin-react-helmet`,
  ]
}

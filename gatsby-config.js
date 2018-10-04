const axios = require('axios')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `fugoki`,
        url: `https://api-euwest.graphcms.com/v1/cjjr1at6d0xb801c3scjrm0l0/master`,
        typeName: `FUGOKI`,
        // refetchInterval: 60,
        createSchema: async () => {
          // const sdl = fs.readFileSync(`${__dirname}/schema.sdl`).toString()
          const request = await axios('http://perdu.com')
          const sdl = request.data
          console.log(request.data)
          return buildSchema(sdl)
        },
      },
    },
  ],
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: `${process.env.CI_HASURA_GRAPQHL_ENDPOINT}/graphql`, // Matched parameters can be used in the destination
      },
    ]
  },
}
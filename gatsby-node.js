const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  debugger
  const { createNode } = actions

  await createResolvers({
    CMS_DefaultImagesVolume: {
      localImage: {
        type: "File",
        async resolve(parent) {
          let url = parent.url
          if (url.startsWith("//")) url = `https:${url}`

          return createRemoteFileNode({
            url: encodeURI(url),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
    // Just for testing createResolvers feature
    SitePage: {
      fullPath: {
        type: "String",
        async resolve(parent) {
          let path = parent.path
          return `https://google.com${path}`
        },
      },
    },
  })
}

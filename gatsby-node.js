const path = require('path')

const createPages = require('./create/createPages')
const createPosts = require('./create/createPosts')
const createProjects = require('./create/createProjects')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const getAuthBase64 = (user, pass) => Buffer.from(`${user}:${pass}`).toString('base64')
const convertAmpersands = text => text.replace(`&#038;`,`&`).replace(`&amp;`,`&`)

exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)
  await createProjects({ actions, graphql, reporter }, options)
}


exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
            httpHeaders: {
              Authorization: `Basic ${getAuthBase64(process.env.AUTH_USERNAME, process.env.AUTH_PASSWORD)}`,
            },
          })
        },
      },
      imageFilePortrait: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
            httpHeaders: {
              Authorization: `Basic ${authString}`,
            },
          })
        },
      },
    },
    WPGraphQL_Page: {
      title: {
        resolve: source => convertAmpersands(source.title),
      },
    },
    WPGraphQL_Post: {
      title: {
        resolve: source => convertAmpersands(source.title),
      },
    },
    WPGraphQL_Project: {
      title: {
        resolve: source => convertAmpersands(source.title),
      },
    },
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

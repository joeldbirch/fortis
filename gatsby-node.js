const path = require(`path`)

const createPages = require(`./create/createPages`)
const createPosts = require(`./create/createPosts`)
const createProjects = require(`./create/createProjects`)
const {createRemoteFileNode} = require(`gatsby-source-filesystem`)

const getAuthBase64 = (user, pass) =>
  Buffer.from(`${user}:${pass}`).toString(`base64`)

const convertEncodedChars = (text) =>
  text.replace(`&#038;`, `&`).replace(`&amp;`, `&`).replace(`&#8211;`, `–`)

const stripTrailingSlash = (uri) => uri.replace(/\/$/, ``)
const replaceEmptyWithHome = (uri) => (uri === `` ? `home` : uri)

exports.createPagesStatefully = async ({graphql, actions, reporter}, options) => {
  // await createPages({actions, graphql, reporter}, options)
  await createPosts({actions, graphql, reporter}, options)
  await createProjects({actions, graphql, reporter}, options)
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const {createNode} = actions

  const createThumbnailResolver = (source) =>
    createRemoteFileNode({
      url: source.sourceUrl,
      store,
      cache,
      createNode,
      createNodeId,
      reporter,
      httpHeaders: {
        Authorization: `Basic ${getAuthBase64(
          process.env.AUTH_USERNAME,
          process.env.AUTH_PASSWORD
        )}`,
      },
    })

  const pageResolvers = {
    title: {
      resolve: ({title}) => convertEncodedChars(title),
    },
    uri: {
      resolve: ({uri}) => {
        const stripped = stripTrailingSlash(uri)
        return replaceEmptyWithHome(stripped)
      },
    },
  }

  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve: createThumbnailResolver,
      },
      imageFilePortrait: {
        type: `File`,
        resolve: createThumbnailResolver,
      },
      imageFileHero: {
        type: `File`,
        resolve: createThumbnailResolver,
      },
    },
    WPGraphQL_Page: pageResolvers,
    WPGraphQL_Post: pageResolvers,
    WPGraphQL_Project: pageResolvers,
  })
}

exports.onCreateWebpackConfig = ({stage, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}

{ context: '/Users/joeldbirch/htdocs/odeoftoorak',
  entry:
   { app: '/Users/joeldbirch/htdocs/odeoftoorak/.cache/production-app' },
  output:
   { filename: '[name]-[contenthash].js',
     chunkFilename: '[name]-[contenthash].js',
     path: '/Users/joeldbirch/htdocs/odeoftoorak/public',
     publicPath: '/' },
  module:
   { rules:
      [ { test: /\.(js|mjs|jsx)$/,
          include: [Function: include],
          type: 'javascript/auto',
          use:
           [ { options:
                { stage: 'build-javascript', configFile: true, compact: true },
               loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/utils/babel-loader.js' } ] },
        { test: /\.ya?ml/,
          use:
           [ { options: {},
               loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/json-loader/index.js' },
             { options: {},
               loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/yaml-loader/index.js' } ] },
        { use:
           [ { loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/ },
        { use:
           [ { loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(mp4|webm|ogv|wav|mp3|m4a|aac|oga|flac)$/ },
        { use:
           [ { loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/file-loader/dist/cjs.js',
               options: { name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.pdf$/ },
        { test:
           '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/@reach/router/es/index.js',
          type: 'javascript/auto',
          use:
           [ { loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/utils/reach-router-add-basecontext-export-loader.js' } ] },
        { test: /\.(js|mjs)$/,
          exclude: [Function: exclude],
          type: 'javascript/auto',
          use:
           [ { options:
                { babelrc: false,
                  configFile: false,
                  compact: false,
                  presets:
                   [ '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/babel-preset-gatsby/dependencies.js' ],
                  sourceMaps: false,
                  cacheIdentifier: 'build-javascript---gatsby-dependencies@0.2.21' },
               loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/babel-loader/lib/index.js' } ] },
        { oneOf:
           [ { use:
                [ { options: { hmr: false },
                    loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       modules: true,
                       importLoaders: 1 } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ 'public/**/*.html', 'src/**/*.js', 'src/images/*.svg' ],
                       rejected: true,
                       printRejected: true,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: false,
                       ignore:
                        [ '/src/components/FormModal/_index.scss',
                          '/src/components/TheWrap/style.module.scss',
                          '/src/styles/base/_custom-reset.scss' ],
                       purgeOnly: [],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'html', 'js' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/postcss-loader/lib/index.js',
                    options:
                     { ident: 'postcss-1',
                       sourceMap: false,
                       plugins: [Function: plugins],
                       browsers: undefined } } ],
               test: /\.module\.css$/ },
             { use:
                [ { options: { hmr: false },
                    loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 1 } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ 'public/**/*.html', 'src/**/*.js', 'src/images/*.svg' ],
                       rejected: true,
                       printRejected: true,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: false,
                       ignore:
                        [ '/src/components/FormModal/_index.scss',
                          '/src/components/TheWrap/style.module.scss',
                          '/src/styles/base/_custom-reset.scss' ],
                       purgeOnly: [],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'html', 'js' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/postcss-loader/lib/index.js',
                    options:
                     { ident: 'postcss-2',
                       sourceMap: false,
                       plugins: [Function: plugins],
                       browsers: undefined } } ],
               test: /\.css$/ } ] },
        { oneOf:
           [ { test: /\.module\.s(a|c)ss$/,
               use:
                [ { options: { hmr: false },
                    loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       modules: true,
                       importLoaders: 2 } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ 'public/**/*.html', 'src/**/*.js', 'src/images/*.svg' ],
                       rejected: true,
                       printRejected: true,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: false,
                       ignore:
                        [ '/src/components/FormModal/_index.scss',
                          '/src/components/TheWrap/style.module.scss',
                          '/src/styles/base/_custom-reset.scss' ],
                       purgeOnly: [],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'html', 'js' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/postcss-loader/lib/index.js',
                    options:
                     { ident: 'postcss-4',
                       sourceMap: false,
                       plugins: [Function: plugins] } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/sass-loader/dist/cjs.js',
                    options: { sourceMap: false, plugins: [] } } ] },
             { test: /\.s(a|c)ss$/,
               use:
                [ { options: {},
                    loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 2 } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ 'public/**/*.html', 'src/**/*.js', 'src/images/*.svg' ],
                       rejected: true,
                       printRejected: true,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: false,
                       ignore:
                        [ '/src/components/FormModal/_index.scss',
                          '/src/components/TheWrap/style.module.scss',
                          '/src/styles/base/_custom-reset.scss' ],
                       purgeOnly: [],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'html', 'js' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/postcss-loader/lib/index.js',
                    options:
                     { ident: 'postcss-3',
                       sourceMap: false,
                       plugins: [Function: plugins] } },
                  { loader:
                     '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/sass-loader/dist/cjs.js',
                    options: { sourceMap: false, plugins: [] } } ] } ] },
        { test: /\.svg$/,
          include: /src\/images\/inline/,
          exclude: undefined,
          use: { loader: 'svg-react-loader', options: { filters: [] } } },
        { use:
           [ { loader:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/,
          include: undefined,
          exclude: /src\/images\/inline/ } ] },
  plugins:
   [ IgnorePlugin {
       options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
       checkIgnore: [Function: bound checkIgnore] },
     DefinePlugin {
       definitions:
        { 'process.env': '{}',
          'process.env.NODE_ENV': '"production"',
          'process.env.PUBLIC_DIR': '"/Users/joeldbirch/htdocs/odeoftoorak/public"',
          'process.env.BUILD_STAGE': '"build-javascript"',
          'process.env.CYPRESS_SUPPORT': undefined,
          'process.env.GATSBY_LOGGER': '"ink"',
          'process.env.GATSBY_BUILD_STAGE': '"build-javascript"',
          __BASE_PATH__: '""',
          __PATH_PREFIX__: '""',
          __ASSET_PREFIX__: '""' } },
     MiniCssExtractPlugin {
       options:
        { filename: '[name].[contenthash].css',
          moduleFilename: [Function: moduleFilename],
          ignoreOrder: false,
          chunkFilename: '[name].[contenthash].css' } },
     GatsbyWebpackStatsExtractor { plugin: { name: 'GatsbyWebpackStatsExtractor' }, options: {} },
     DefinePlugin {
       definitions: { __MANIFEST_PLUGIN_HAS_LOCALISATION__: undefined } } ],
  target: 'web',
  devtool: 'source-map',
  performance: { hints: false },
  mode: 'production',
  resolveLoader:
   { modules:
      [ '/Users/joeldbirch/htdocs/odeoftoorak/node_modules',
        '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/loaders',
        'node_modules' ],
     plugins: [ { apply: [Function: nothing] } ] },
  resolve:
   { extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ],
     alias:
      { 'gatsby$':
         '/Users/joeldbirch/htdocs/odeoftoorak/.cache/gatsby-browser-entry.js',
        '@babel/runtime':
         '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/@babel/runtime',
        'core-js': '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/core-js',
        'react-hot-loader':
         '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/react-hot-loader',
        'react-lifecycles-compat':
         '/Users/joeldbirch/htdocs/odeoftoorak/.cache/react-lifecycles-compat.js',
        'create-react-context':
         '/Users/joeldbirch/htdocs/odeoftoorak/.cache/create-react-context.js',
        '@reach/router':
         '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/@reach/router/es' },
     plugins:
      [ { apply: [Function: nothing] },
        { apply: [Function: nothing] },
        { apply: [Function: nothing],
          makePlugin: [Function],
          moduleLoader: [Function],
          topLevelLoader: { apply: [Function: nothing] },
          bind: [Function],
          tsLoaderOptions: [Function],
          forkTsCheckerOptions: [Function] },
        GatsbyThemeComponentShadowingResolverPlugin {
          cache: {},
          themes:
           [ { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/internal-plugins/dev-404-page',
               themeName: 'dev-404-page' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/internal-plugins/load-babel-config',
               themeName: 'load-babel-config' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/internal-plugins/internal-data-bridge',
               themeName: 'internal-data-bridge' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/internal-plugins/prod-404',
               themeName: 'prod-404' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing',
               themeName: 'webpack-theme-component-shadowing' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-hubspot',
               themeName: 'gatsby-plugin-hubspot' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-polyfill-io',
               themeName: 'gatsby-plugin-polyfill-io' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-google-fonts',
               themeName: 'gatsby-plugin-google-fonts' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-react-helmet',
               themeName: 'gatsby-plugin-react-helmet' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-sass',
               themeName: 'gatsby-plugin-sass' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-react-svg',
               themeName: 'gatsby-plugin-react-svg' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-source-filesystem',
               themeName: 'gatsby-source-filesystem' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-transformer-sharp',
               themeName: 'gatsby-transformer-sharp' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-sharp',
               themeName: 'gatsby-plugin-sharp' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-manifest',
               themeName: 'gatsby-plugin-manifest' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-purgecss',
               themeName: 'gatsby-plugin-purgecss' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-netlify',
               themeName: 'gatsby-plugin-netlify' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' },
             { themeDir: '/Users/joeldbirch/htdocs/odeoftoorak',
               themeName: 'default-site-plugin' },
             { themeDir:
                '/Users/joeldbirch/htdocs/odeoftoorak/node_modules/gatsby-plugin-page-creator',
               themeName: 'gatsby-plugin-page-creator' } ],
          projectRoot: '/Users/joeldbirch/htdocs/odeoftoorak',
          extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ] } ] },
  node: { __filename: true },
  optimization:
   { runtimeChunk: { name: 'webpack-runtime' },
     moduleIds: 'hashed',
     splitChunks:
      { name: false,
        chunks: 'all',
        cacheGroups:
         { default: false,
           vendors: false,
           commons: { name: 'commons', chunks: 'all', minChunks: 1.5 },
           react:
            { name: 'commons',
              chunks: 'all',
              test: /[\\\/]node_modules[\\\/](react|react-dom|scheduler)[\\\/]/ },
           styles:
            { name: 'styles',
              test: /\.(css|scss|sass|less|styl)$/,
              chunks: 'all',
              enforce: true,
              priority: 10 } } },
     minimizer:
      [ TerserPlugin {
          options:
           { test: /\.m?js(\?.*)?$/i,
             chunkFilter: [Function: chunkFilter],
             warningsFilter: [Function: warningsFilter],
             extractComments: false,
             sourceMap: true,
             cache: true,
             cacheKeys: [Function: cacheKeys],
             parallel: true,
             include: undefined,
             exclude: /\.min\.js/,
             minify: undefined,
             terserOptions:
              { output: { ecma: 5 },
                ie8: false,
                mangle: { safari10: true },
                parse: { ecma: 8 },
                compress: { ecma: 5 } } } },
        OptimizeCssAssetsWebpackPlugin {
          pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
          options:
           { assetProcessors:
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css(\?.*)?$/i,
                  processor: [Function: processor] } ],
             canPrint: undefined,
             assetNameRegExp: /\.css(\?.*)?$/i,
             cssProcessor: { [Function: creator] process: [Function] },
             cssProcessorOptions: {},
             cssProcessorPluginOptions:
              { preset:
                 [ 'default',
                   { svgo:
                      { full: true,
                        plugins:
                         [ { removeUselessDefs: true,
                             addAttributesToSVGElement: true,
                             addClassesToSVGElement: true,
                             cleanupAttrs: true,
                             cleanupEnableBackground: true,
                             cleanupIDs: true,
                             cleanupListOfValues: true,
                             cleanupNumericValues: true,
                             collapseGroups: true,
                             convertColors: true,
                             convertPathData: true,
                             convertStyleToAttrs: true,
                             convertTransform: true,
                             inlineStyles: true,
                             mergePaths: true,
                             minifyStyles: true,
                             moveElemsAttrsToGroup: true,
                             moveGroupAttrsToElems: true,
                             prefixIds: true,
                             removeAttributesBySelector: true,
                             removeAttrs: true,
                             removeComments: true,
                             removeDesc: true,
                             removeDimensions: true,
                             removeDoctype: true,
                             removeEditorsNSData: true,
                             removeElementsByAttr: true,
                             removeEmptyAttrs: true,
                             removeEmptyContainers: true,
                             removeEmptyText: true,
                             removeHiddenElems: true,
                             removeMetadata: true,
                             removeNonInheritableGroupAttrs: true,
                             removeOffCanvasPaths: true,
                             removeRasterImages: true,
                             removeScriptElement: true,
                             removeStyleElement: true,
                             removeTitle: true,
                             removeUnknownsAndDefaults: true,
                             removeUnusedNS: true,
                             removeUselessStrokeAndFill: true,
                             removeXMLNS: true,
                             removeXMLProcInst: true,
                             reusePaths: true,
                             sortAttrs: true } ] } } ] } },
          phaseAssetProcessors:
           { 'compilation.optimize-chunk-assets':
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css(\?.*)?$/i,
                  processor: [Function: processor] } ],
             'compilation.optimize-assets': [],
             emit: [] },
          deleteAssetsMap: {} } ] } }
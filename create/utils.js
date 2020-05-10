const path = require(`path`)

module.exports.getAllLayoutsData = (pageType = `page`) => {
  const glob = require(`glob`)

  let allLayoutsString = ``

  const fileArray = glob.sync(`./src/layouts/${pageType}/**/*.data.js`)

  fileArray.forEach(function (file) {
    let queryStringFunction = require(path.resolve(file))
    allLayoutsString = `${allLayoutsString}\n${queryStringFunction()}`
  })

  return allLayoutsString
}

/**
 * Creates files based on a template string.
 *
 * @param {string} templateCacheFolderPath - Path where the temporary files should be saved.
 * @param {string} templatePath - Path to the file holding the template string.
 * @param {string} templateName - Name of the temporary created file.
 * @param {object[]} imports - An array of objects, that define the layoutType, componentName and filePath.
 * @returns {Promise<>}
 */
module.exports.createTemplate = ({
  templateCacheFolderPath,
  templatePath,
  templateName,
  imports,
}) => {
  return new Promise((resolve) => {
    const fs = require(`fs`)
    const template = require(templatePath)
    const contents = template(imports)

    fs.mkdir(templateCacheFolderPath, {recursive: true}, (err) => {
      if (err) throw new Error(`Error creating template-cache folder: ${err}`)

      const filePath = `${templateCacheFolderPath}/${templateName}.js`

      fs.writeFile(filePath, contents, `utf8`, (err) => {
        if (err) throw new Error(`Error writing ${templateName} template: ${err}`)

        console.log(`Successfully created ${templateName} template.`)
        resolve()
      })
    })
  })
}

/**
 * Creates pages out of the temporary created templates.
 */
module.exports.createPageWithTemplate = ({
  createTemplate,
  templateCacheFolder,
  pageTemplate,
  page,
  pagePath,
  mappedLayouts,
  createPage,
  reporter,
  prefix = `tmp`,
}) => {
  /**
   * First we create a new template file for each page.
   */
  createTemplate({
    templateCacheFolderPath: templateCacheFolder,
    templatePath: pageTemplate,
    templateName: `${prefix}-${page.slug}`,
    imports: mappedLayouts,
  }).then(() => {
    /**
     * Then, we create a gatsby page with the just created template file.
     */
    createPage({
      path: pagePath,
      component: path.resolve(`${templateCacheFolder}/${prefix}-${page.slug}.js`),
      context: {
        page: page,
      },
    })

    reporter.info(`page created: ${pagePath}`)
  })
}

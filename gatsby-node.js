const { resolve } = require(`path`)
const path = require(`path`)
const glob = require(`glob`)
const chunk = require(`lodash/chunk`)
const fs = require("fs")

exports.onPostBuild = () => {
  fs.copyFile(`./firebase.json`, `./public/firebase.json`, (err) => {
    if (err) {
      throw err
    }
  })
}

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const templates = getTemplates()

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          nodeType
          uri
        }
      }
      allWpPost {
        nodes {
          id
          nodeType
          uri
        }
      }
    }
  `)

  const {
    allWpPage: { nodes: allWpPageNodes },
  } = result.data
  const {
    allWpPost: { nodes: allWpPostNodes },
  } = result.data

  const data = allWpPageNodes.concat(allWpPostNodes)

  const contentTypeTemplateDirectory = `./src/templates/single/`
  const contentTypeTemplates = templates.filter((path) =>
    path.includes(contentTypeTemplateDirectory)
  )

  await Promise.all(
    data.map(async (node, i) => {
      const { nodeType, uri, id } = node
      const templatePath = `${contentTypeTemplateDirectory}${nodeType}.js`

      console.log(nodeType, uri, id)

      const contentTypeTemplate = contentTypeTemplates.find(
        (path) => path === templatePath
      )

      if (!contentTypeTemplate) {
        return
      }

      await actions.createPage({
        component: resolve(contentTypeTemplate),
        path: uri,
        context: {
          id,
          nextPage: (data[i + 1] || {}).id,
          previousPage: (data[i - 1] || {}).id,
        },
      })
    })
  )
}

const path = require("path") // see nodejs docs to strip of the path and get the filename

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md") //striping the url and getting the filename
    createNodeField({
      // here we are creating new node field
      node,
      name: "slug",
      value: slug,
    })
  }
}

//1. get path to templates
//2. get markdown data
//3. Create new pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.jsx")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `) // this graphql function returns a promise

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      // Path for this page — required
      path: `/blog/${edge.node.fields.slug}`,
      component: blogTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
        slug: edge.node.fields.slug,
      },
    })
  })
}

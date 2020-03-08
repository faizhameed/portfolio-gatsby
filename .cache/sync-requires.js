const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-jsx": hot(preferDefault(require("/home/faiz/Documents/Gatsby-Projects/gatsby-contentful/src/templates/blog.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/faiz/Documents/Gatsby-Projects/gatsby-contentful/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/home/faiz/Documents/Gatsby-Projects/gatsby-contentful/src/pages/about.jsx"))),
  "component---src-pages-blog-jsx": hot(preferDefault(require("/home/faiz/Documents/Gatsby-Projects/gatsby-contentful/src/pages/blog.jsx"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("/home/faiz/Documents/Gatsby-Projects/gatsby-contentful/src/pages/contact.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/faiz/Documents/Gatsby-Projects/gatsby-contentful/src/pages/index.jsx")))
}


// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-jsx": () => import("./../src/templates/blog.jsx" /* webpackChunkName: "component---src-templates-blog-jsx" */),
  "component---src-templates-project-detail-jsx": () => import("./../src/templates/project_detail.jsx" /* webpackChunkName: "component---src-templates-project-detail-jsx" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-jsx": () => import("./../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-about-jsx": () => import("./../src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-blog-jsx": () => import("./../src/pages/blog.jsx" /* webpackChunkName: "component---src-pages-blog-jsx" */),
  "component---src-pages-contact-jsx": () => import("./../src/pages/contact.jsx" /* webpackChunkName: "component---src-pages-contact-jsx" */),
  "component---src-pages-index-jsx": () => import("./../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}


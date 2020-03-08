module.exports = {
  siteMetadata: {
    title: `Full-StackDeveloper`,
    author: `Faiz Hameed`,
  },
  plugins: [
    { resolve: `gatsby-plugin-sass` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false, // to avoid linking images to the source
            },
          },
        ],
      },
    },
  ],
}

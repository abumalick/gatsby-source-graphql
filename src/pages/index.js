// import { graphql } from "gatsby"
import React from "react"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    <p>
      <a href="https://www.gatsbyjs.org/plugins/gatsby-source-graphql">
        Using gatsby-source-graphql
      </a>
    </p>
  </div>
)

// export const query = graphql`
//   query {
//     cms {
//       blogPosts(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
//         title
//         createdAt
//         slug
//       }
//     }
//   }
// `

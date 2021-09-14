import { graphql } from "gatsby"
import React from "react"

export default function Home({data}) 
{
  const whoweare_all_content = data.whoweare.nodes;
  console.log(whoweare_all_content);

  return(
    <div>
      <h1>Penthara Technologies</h1>
      {whoweare_all_content.map(whoweare => (
        <div>
          <h3>{whoweare.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML = {{__html: whoweare.html}}></div>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
query MyQuery {
  whoweare: allMarkdownRemark {
    nodes {
      frontmatter {
        date
        title
      }
      html
      id
    }
  }
}
`
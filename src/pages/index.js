import { graphql } from "gatsby"
import {GatsbyImage,getImage} from 'gatsby-plugin-image'
import React from "react"

export default function Home({data}) 
{
  const whoweare_all_content = data.whoweare.nodes;
  const teams = data.teams.nodes;
  console.log(teams);

  return(
    <div>
      <h1>Penthara Technologies</h1>
      {whoweare_all_content.map(whoweare => (
        <div>
          <h3>{whoweare.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML = {{__html: whoweare.html}}></div>
        </div>
      ))}
      <hr/>
      <h2>Team Members</h2>
      {teams.map(team => (
        <div>
          <GatsbyImage image = {getImage(team.frontmatter.memberImg.childImageSharp.gatsbyImageData)} />
          <h3>{team.frontmatter.firstName + " " + team.frontmatter.lastName}</h3>
          <p>{team.frontmatter.designation + ", " + team.frontmatter.isActive}</p>
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
  teams: allMarkdownRemark(filter: {frontmatter: {company: {eq: "Penthara"}}}) {
    nodes {
      frontmatter {
        firstName
        lastName
        designation
        isActive
        memberImg {
          childImageSharp {
            gatsbyImageData(formats: AUTO, layout: FIXED, placeholder: BLURRED)
          }
        }
      }
      id
    }
  }
}
`
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

export default function Footer()
{
    const footData = useStaticQuery(graphql`
    query MyFooterQuery {
        footer: allMarkdownRemark(filter: {frontmatter: {category: {eq: "footer"}}}) {
          nodes {
            frontmatter {
              partner_logo {
                childImageSharp {
                  gatsbyImageData(formats: AUTO, layout: FIXED, placeholder: BLURRED)
                }
              }
              location_india
              location_usa
              contact_india
              contact_usa
              faceBook
              youTube
              linkedin
              twitter
            }
          }
        }
      }
      `)
    const footer_details = footData.footer.nodes;
    console.log(footer_details[0].frontmatter);

    return(
        <div>
            <h2>Footer</h2>
            {/* <GatsbyImage image = {getImage(footer_details[0].frontmatter.partner_logo.childImageSharp.gatsbyImageData)}/> */}
            <h3>Locations</h3>
            <p>{footer_details[0].frontmatter.location_india}</p>
            <p>{footer_details[0].frontmatter.location_usa}</p>
            <h3>Contact</h3>
            <p>{footer_details[0].frontmatter.contact_india}</p>
            <p>{footer_details[0].frontmatter.contact_usa}</p>
            <h3>Social</h3>
            <a href={footer_details[0].frontmatter.faceBook}>FaceBook</a><br/>
            <a href={footer_details[0].frontmatter.youTube}>YouTube</a><br/>
            <a href={footer_details[0].frontmatter.linkedin}>LinkedIn</a><br/>
            <a href={footer_details[0].frontmatter.twitter}>Twitter</a>
        </div>
    )
}
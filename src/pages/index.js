import React from "react"
import { Link } from "gatsby"
import "../css/mainStyles.scss"
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import { convertInputObjectField } from "graphql-compose/lib/utils/toInputObjectType"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import WorkSlider from "../components/workslider"



export const pageQuery = graphql`
{
    wpgraphql {
      page(id: "cGFnZToyOQ==") {
        id
        title
        pageSections {
          pageSections {
            __typename
            ... HeroBanner
            ... WorkSlider
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const sections = data.wpgraphql.page.pageSections.pageSections;

  return(
  <Layout>
    <SEO title="Home" />
    
    {sections.map(section => {
      const typeName = section.__typename;
      switch (typeName) {
        case 'WPGraphQL_Page_Pagesections_PageSections_HeroBanner':
          return <Hero key={section.id} {...section} />
        case 'WPGraphQL_Page_Pagesections_PageSections_WorkSection':
          return <WorkSlider key={section.id} {...section}/>
        default:
          return <p> You dont have any sections enabled.</p>
      }
    })}
    
    
    </Layout>
  )
}

export default IndexPage



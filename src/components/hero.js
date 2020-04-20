import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from 'gatsby'

export const fragment = graphql`
fragment HeroBanner on WPGraphQL_Page_Pagesections_PageSections_HeroBanner {
              headline
              subtext
              ctaButtonLabel
              ctaButtonLink
              heroImage {
                sourceUrl
                altText
              }
}
`

const Hero = props => {
    return(
        
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <div className="columns has-padding-1 is-vcentered">
          <div className="column is-one-third has-padding-6">
            <h1 className="title is-spaced has-text-black is-size-1 has-text-weight-normal">
            {props.headline}
            </h1>
            <div className="subtitle is-size-6 has-text-black ">
              {props.subtext}
            </div>
            <Link className="button is-family-secondary has-text-weight-bold is-uppercase is-info" to={props.ctaButtonLink}>{props.ctaButtonLabel}</Link>
          </div>

          <div className="column">
            <img className="has-padding-5" src="http://localhost:8081/wp-content/uploads/2020/04/undraw_experience_design_eq3j.png"></img>
          </div>
          </div>
          
        </div>
      </div>
    </section>
    )
}
export default Hero;
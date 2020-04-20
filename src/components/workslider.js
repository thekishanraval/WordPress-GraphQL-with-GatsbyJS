import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const fragment = graphql`
fragment WorkSlider on WPGraphQL_Page_Pagesections_PageSections_WorkSection {
              workSectionTitle
              workSectionSubtext
            }
`

const WorkSlider = props => {
    const caseQuery = useStaticQuery(graphql`
    {
        wpgraphql {
            caseStudies(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
            edges {
            node {
                id
                title
                content
                excerpt(format: RENDERED)
                slug
                workCategories(first: 1) {
                edges {
                    node {
                    id
                    name
                    slug
                    databaseId
                    }
                }
                }
                caseStudyDetails {
                caseStudyLogo {
                    sourceUrl
                    altText
                }
                }
                featuredImage {
                altText
                srcSet
                sourceUrl
                }
            }
            cursor
            }
        }
    }
}
    `)
    
    return(
        <section className="hero has-padding-0 has-background-light is-fluid ">
            
            <div className="columns is-fluid is-centered">
                
                <div className="column is-full is-fluid">
                <Carousel autoPlay centerSlidePercentage={60} swipeable={true} emulateTouch={true} interval={4000}  transitionTime={1000} infiniteLoop useKeyboardArrows centerMode showThumbs={false}>
                   {caseQuery.wpgraphql.caseStudies.edges.map(study => (
                      

                       <div key={study.node.id} className="column columns is-vcentered card is-one-fourths work-tile has-padding-2 has-margin-1 ">
                            
                            <div className="column  is-two-thirds">
                                <p className="has-text-grey">{study.node.workCategories.edges[0].node.name}</p>
                                {/* <img src={study.node.caseStudyDetails.caseStudyLogo.sourceUrl} /> */}
                                <hr style={{maxWidth: `80px`,}} className="nav-separator"></hr>
                                <h2 className="title is-spaced has-text-black is-size-3 has-text-weight-normal">{study.node.title}</h2>
                                <div className="subtitle is-size-6 has-text-black " dangerouslySetInnerHTML={{ __html: study.node.excerpt}}></div>
                                <Link className="button is-family-secondary has-text-weight-bold is-uppercase is-info" to={study.node.slug}>Learn more</Link>
                            </div>
                            
                            <div className="column is-one-third"
                                style={{
                                    backgroundImage: `url(`+study.node.featuredImage.sourceUrl+`)`,
                                    backgroundSize: `cover`,
                                    minHeight: `30vh`,
                                    backgroundPosition: `center`,
                                    borderRadius: `50px 0px`,
                                }} >
                            </div>

                        </div>

                   ))}
                   



                    
                </Carousel>
                </div>
            </div>
    </section>
    )
}
export default WorkSlider;
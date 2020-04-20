import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar is-white is-fixed-top">
      <div class="navbar-brand">
        <Link
              className="navbar-item"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              <img 
              src="https://www.tadigital.com/wp-content/uploads/2018/09/ta_Logo_B.png" 
              />
        </Link>
        
    </div>
      <div className="navbar-menu is-sticky">
        <div className="navbar-end">
     
          <Link
              className="navbar-item has-text-info is-size-6 is-uppercase has-text-weight-normal"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Work
            </Link>
            <Link
              className="navbar-item  is-size-6 is-uppercase has-text-weight-normal"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Solutions
            </Link>
            <Link
              className="navbar-item  is-size-6 is-uppercase has-text-weight-normal"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Culture
            </Link>
            <Link
              className="navbar-item  is-size-6 is-uppercase has-text-weight-normal"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Partners
            </Link>
            <Link
              className="navbar-item  is-size-6 is-uppercase has-text-weight-normal"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Insights
            </Link>
            <Link
              className="navbar-item  is-size-6 is-uppercase has-text-weight-normal"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Careers
            </Link>
            <Link
              className="navbar-item  is-size-6 is-uppercase has-text-weight-normal"
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              Contact
            </Link>
            </div>
            </div>
      
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

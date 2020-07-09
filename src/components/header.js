import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./index/index.module.css"

const Header = ({ siteTitle }) => (
    <h1 style={{ margin: 0 }}>
        <Link className = {styles.menuitem} to="/" style={{color: `black`,textDecoration: `none`}}>
            {siteTitle}
        </Link>
    </h1>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
}

export default Header
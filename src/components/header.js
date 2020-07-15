import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar,NavbarBrand,Nav,NavItem,Collapse} from "reactstrap"
import styles from "./index/index.module.css"
import logo from "../images/SLF-logo.png"

/*<Link className = {styles.menuitem} to="/" style={{color: `black`,textDecoration: `none`}}>
            {siteTitle}
        </Link> */

// <Navbar style = {{width: "100%", paddingTop: "0", paddingBottom: "0", margin: "0 auto"}}>
//<NavItem styles = {{marginLeft: "1rem", marginRight: "1rem"}}>
//<Nav className="mr-auto" styles = {{listStyle: "none", listStyleType: "none"}}>

const Header = ({ siteTitle }) => (
    <Navbar>
        <NavbarBrand  href='/'>
            <img src={logo} alt = "SLF logo" width="100" height="100"/>
        </NavbarBrand>
        <Collapse>
            <Nav>
                <NavItem>
                        {siteTitle}
                </NavItem>
                <NavItem>
                    <Link className = {styles.menuitem} to="/" style={{color: `black`,textDecoration: `none`}}>
                        Menu 2
                    </Link>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
}

export default Header
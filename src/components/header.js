import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from "./index/index.module.css"
import logo from "../images/SLF-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

/*<Link className = {styles.menuitem} to="/" style={{color: `black`,textDecoration: `none`}}>
            {siteTitle}
        </Link> */

// <Navbar style = {{width: "100%", paddingTop: "0", paddingBottom: "0", margin: "0 auto"}}>
//<NavItem styles = {{marginLeft: "1rem", marginRight: "1rem"}}>
//<Nav className="mr-auto" styles = {{listStyle: "none", listStyleType: "none"}}>
//<Navbar styles = {{width: "100%", float: "left", margin: "0 0 3em 0", padding: "0", listStyle: "none" }}>

/* <Navbar.Collapse>
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
</Navbar.Collapse> */

// Note we use Gatsby <Link> instead of <Navbar.Link> for load-time optimization

const Header = ({ siteTitle }) => (
    <Navbar>
        <Navbar.Brand>
            <Link to='/'>
                <img src={logo} alt = {siteTitle+"logo"} width="80" height="80"/>
            </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Item>
                <Link className = {styles.menuitem} activeClassName = {styles.activemenuitem} to="/" style={{textDecoration: `none`}}>
                    OUR MISSION
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className = {styles.menuitem} activeClassName = {styles.activemenuitem} to="/404" style={{textDecoration: `none`}}>
                    GET INVOLVED
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className = {styles.menuitem} activeClassName = {styles.activemenuitem} to="/404" style={{textDecoration: `none`}}>
                    DONATE
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className = {styles.menuitem} activeClassName = {styles.activemenuitem} to="/404" style={{textDecoration: `none`}}>
                    SUBSCRIBE
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className = {styles.menuitem} activeClassName = {styles.activemenuitem} to="/about-us" style={{textDecoration: `none`}}>
                    ABOUT US
                </Link>
            </Nav.Item>
        </Nav>
    </Navbar>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
}

export default Header
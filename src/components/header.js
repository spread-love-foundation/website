import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from "./index/index.module.css"
import logo from "../images/SLF-logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

// Note we use Gatsby <Link> instead of <Navbar.Link> for load-time optimization

const Header = ({ siteTitle }) => (
    <Navbar expand="lg">
        <Navbar.Brand>
            <Link to='/'>
                <img src={logo} alt = {siteTitle+" logo"} width="80" height="80"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-right">
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
                    <Link className = {styles.menuitem} activeClassName = {styles.activemenuitem} to="/donate" style={{textDecoration: `none`}}>
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
        </Navbar.Collapse>
    </Navbar>
)

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
}

export default Header
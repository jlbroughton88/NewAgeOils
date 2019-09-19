import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import { Col, Row } from "react-materialize"
import logo from "./images/logo.png"

class Navbar extends Component {
    render() {
        return (
            <MotherDiv>
                <Row>
                    <Col s={3} m={3} l={3} className="logoCol">
                        <Link id="logoLink" to="/">
                        <Logo src={logo}></Logo>
                        </Link>
                        
                    </Col>
                    <Col s={9} m={9} l={9} className="navCol">
                        <Link className="navLink" to="/">Home</Link>
                        {/* <Link className="navLink" to="/about">About</Link> */}
                        <Link className="navLink" to="/services">Services</Link>
                        <Link className="navLink" id="contactBtn" to="/contact">Contact</Link>
                    </Col>
                </Row>

            </MotherDiv>
        )
    }
}

export default Navbar;

const MotherDiv = styled.div`
    width: 100%;
    height: 7%;
    background: #e4e4e4;
    border-bottom: #179D1C solid 1px;
    min-height: 51px;
`

const Logo = styled.img`
    height: 80%;
    width: auto;
    align-self: center;
`

import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import { Col, Row } from "react-materialize"

class Navbar extends Component {
    render() {
        return (
            <MotherDiv>
                <Row>
                    <Col s={4} m={4} l={4} className="navCol">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                    </Col>
                    <Col className="logoCol">

                    </Col>
                    <Col className="contactCol">

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
    background-color: lightblue;
`
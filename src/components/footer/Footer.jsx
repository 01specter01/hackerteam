import { NavLink } from "react-router-dom";
import "./Footer.scss";

import React from "react";

import { Box, Container, Row, Column, Heading } from "./FooterStyles";

const Footer = () => {
   
    return (
        <Box>
            <Container>
                <Row>
                    <Column className="column">
                        <Heading>About Us</Heading>
                        <NavLink to="aim">Aim</NavLink>
                        <NavLink to="vision">Vision</NavLink>
                        <NavLink to="testimonials">Testimonials</NavLink>
                    </Column>
                    <Column className="column">
                        <Heading>Services</Heading>
                        <NavLink>Writing</NavLink>
                        <NavLink>Internships</NavLink>
                        <NavLink>Coding</NavLink>
                        <NavLink>Teaching</NavLink>
                    </Column>
                    <Column className="column">
                        <Heading>Contact Us</Heading>
                        <a
                            href="https://www.linkedin.com/in/leo-volwahsen/"
                            target="_blank"
                        >
                            Leo Volwahsen
                        </a>
                        <a
                            href="https://www.linkedin.com/in/elena-rotari-45b330243/"
                            target="_blank"
                        >
                            Ella Rotari
                        </a>
                        <a href="https://www.linkedin.com/in/yaaroub-al-haj-dawoud-82a725200/">
                            Yaroub Al Haj Dawoud
                        </a>
                        <NavLink>Mohannad</NavLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;

import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import Aim from "./aboutUs/Aim";
import Vision from "./aboutUs/Vision";
import Testemonials from "./aboutUs/Testemonials";

const Footer = () => {

    return (
        <Box>
            <h1
                style={{
                    color: "beige",
                    textAlign: "center",
                    marginTop: "-50px",
                    fontWeight: "900",
                    textDecoration: "underline",
                    marginBottom: "2rem",
                }}
            >
                HackerTeam: Learning Platform to get started with react
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink path="./aboutUs">Aim</FooterLink>
                        <FooterLink href={<Vision />}>Vision</FooterLink>
                        <FooterLink href={<Testemonials />}>
                            Testimonials
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Leo Volwahsen</FooterLink>
                        <FooterLink href="#">Ella Rotari</FooterLink>
                        <FooterLink href="#">Yaroub Al Haj Dawoud</FooterLink>
                        <FooterLink href="#">Mohannad</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}
export default Footer;

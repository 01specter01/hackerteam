import React from "react";

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <>
            <Box>
                <Container>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="aim">Aim</FooterLink>
                            <FooterLink href="vision">Vision</FooterLink>
                            <FooterLink href="testemonials">
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
                            <FooterLink href="#">
                                Yaroub Al Haj Dawoud
                            </FooterLink>
                            <FooterLink href="#">Mohannad</FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </>
    );
};
export default Footer;

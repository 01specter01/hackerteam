import { NavLink } from "react-router-dom";
import "./Footer.scss";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  const handleLoading = (e) => {
    e.preventDefault();
  };
  return (
    <Box>
      {/* <h3
        style={{
          color: "beige",
          textAlign: "center",
          marginTop: "-50px",
          fontWeight: "700",
          textDecoration: "underline",
          marginBottom: "1rem",
        }}
      >
        HackerTeam: Learning Platform to get started with react
      </h3> */}
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
            <NavLink>Leo Volwahsen</NavLink>
            <NavLink>Ella Rotari</NavLink>
            <NavLink>Yaroub Al Haj Dawoud</NavLink>
            <NavLink>Mohannad</NavLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

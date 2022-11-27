import styled from "styled-components";

export const Box = styled.div`
  background: #21232a;
  // position: absolute;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  color: #61dafbaa;
  @media (max-width: 400px) {
    // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: beige;
  margin-bottom: 5px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #61dafbaa;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #61dafbaa;
  margin-bottom: 10px;
  font-weight: bold;
`;

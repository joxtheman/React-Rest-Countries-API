import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Text>Where in the world?</Text>
      <ThemeMode>Dark Mode</ThemeMode>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  height: 10vh;
  box-shadow: 0px 0px 4px 0px rgba(133, 133, 133, 0.75);
  -webkit-box-shadow: 0px 0px 4px 0px rgba(133, 133, 133, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(133, 133, 133, 0.75);
`;

const Text = styled.h3`
  font-weight: 800;
`;

const ThemeMode = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

import styled from "styled-components";

const Navbar = ({ changeTheme }) => {
  return (
    <Nav>
      <Text>Where in the world?</Text>
      <ThemeMode onClick={changeTheme}>Dark Mode</ThemeMode>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.elements};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  height: 10vh;
  box-shadow: 0px 0px 4px 0px ${(props) => props.theme.shadow};
  -webkit-box-shadow: 0px 0px 4px 0px ${(props) => props.theme.shadow};
  -moz-box-shadow: 0px 0px 4px 0px ${(props) => props.theme.shadow};
`;

const Text = styled.h3`
  font-weight: 800;
  /* color: ${(props) => props.theme.fontColor}; */
`;

const ThemeMode = styled.p`
  /* color: ${(props) => props.theme.fontColor}; */
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

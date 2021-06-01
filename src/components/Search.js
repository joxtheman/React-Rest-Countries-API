import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = ({ themeSwitch }) => {
  return (
    <Container>
      <form>
        <SearchIcon>
          <FaSearch color={themeSwitch === "light" ? "#858585" : "white"} />
        </SearchIcon>
        <input type="text" placeholder="Search for a country..." />
      </form>

      <select defaultValue="Filter by Region" selected>
        <option value="Filter by Region" disabled hidden>
          Filter by Region
        </option>

        <option className="opop" value="africa">
          Africa
        </option>

        <option className="opop" value="africa">
          Americas
        </option>

        <option className="opop" value="africa">
          Asia
        </option>

        <option className="opop" value="africa">
          Europe
        </option>

        <option className="opop" value="africa">
          Oceania
        </option>
      </select>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: inline-block;
  margin: 20px 0px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;

  & input {
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.input};
    padding: 15px 40px 15px 70px;
    width: 450px;

    outline: none;
    font-family: inherit;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
    -webkit-box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
    -moz-box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
  }

  & select {
    padding: 0px 60px 0px 20px;
    font-family: inherit;
    font-size: 0.8rem;
    appearance: none;
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
    -webkit-box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
    -moz-box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
  }
  form {
    position: relative;
    & div {
      position: absolute;
      top: 35%;
      left: 4%;
    }
  }
`;

const SearchIcon = styled.div`
  display: inline-block;
  padding-left: 10px;
`;

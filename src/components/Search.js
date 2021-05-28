import styled from "styled-components";
const Search = () => {
  return (
    <Container>
      <form>
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
  display: flex;
  justify-content: space-between;

  & input {
    color: var(--light-mode-input);
    background-color: var(--white);
    padding: 15px 40px 15px 40px;
    width: 450px;

    outline: none;
    font-family: inherit;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
    -webkit-box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
    -moz-box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
  }
  & select {
    padding: 0px 60px 0px 20px;
    font-family: inherit;
    font-size: 0.8rem;
    appearance: none;
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
    -webkit-box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
    -moz-box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
  }
`;

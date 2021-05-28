import styled from "styled-components";
import CountryCard from "./CountryCard";

const CountryList = (props) => {
  return (
    <Container>
      {props.countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </Container>
  );
};

export default CountryList;

const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-top: 30px;
`;

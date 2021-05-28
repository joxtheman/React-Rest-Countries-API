import styled from "styled-components";

const CountryCard = (props) => {
  return (
    <Container>
      <Image src={props.country.flag} alt="flag" />
      <CountryTitle>{props.country.name}</CountryTitle>
      <CountrySummary>
        <p>
          Population:{" "}
          <span>
            {new Intl.NumberFormat().format(props.country.population)}
          </span>
        </p>
        <p>
          Region: <span>{props.country.region}</span>
        </p>
        <p>
          Capital: <span>{props.country.capital}</span>
        </p>
      </CountrySummary>
    </Container>
  );
};

export default CountryCard;

const Container = styled.div`
  margin-bottom: 40px;
  background-color: var(--white);
  border-radius: 3px;
  width: 250px;
  box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
  -webkit-box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
  -moz-box-shadow: 0px 1px 3px 0px rgba(133, 133, 133, 0.75);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 8rem;
`;
const CountryTitle = styled.h4`
  padding: 20px;
`;

const CountrySummary = styled.div`
  font-size: 0.8rem;
  padding: 5px 50px 50px 20px;
  & p {
    padding: 0px 0px 10px 0px;
    font-weight: 600;
  }
  & p span {
    font-weight: 300;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <Link to={`./country/${props.country.name.toLowerCase()}`}>
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
    </Link>
  );
};

export default CountryCard;

const Container = styled.div`
  margin-bottom: 40px;
  background-color: ${(props) => props.theme.elements};
  border-radius: 3px;
  width: 250px;
  box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
  -webkit-box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
  -moz-box-shadow: 0px 1px 3px 0px ${(props) => props.theme.shadow};
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50%;
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

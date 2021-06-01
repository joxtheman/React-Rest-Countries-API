import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const [country, setCountry] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const url = `https://restcountries.eu/rest/v2/name/${id}`;

  const getCountry = async () => {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();

      const [newCountry] = data;
      console.log(newCountry);

      setCountry(newCountry);
      setHasLoaded(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div>
      {!hasLoaded ? (
        <Container>
          <h2>LOADING...</h2>
        </Container>
      ) : (
        <Container>
          <Button onClick={() => history.push("/")}>
            &larr;
            <p>Back</p>
          </Button>
          <Content>
            <ImageContainer>
              <img src={country.flag} alt="" />
            </ImageContainer>

            <DetailsContainer>
              <LeftContent>
                <CountryTitle>{country.name}</CountryTitle>
                <LeftBox>
                  <p>
                    Native Name: <span>{country.nativeName}</span>
                  </p>
                  <p>
                    Population:{" "}
                    <span>
                      {new Intl.NumberFormat().format(country.population)}
                    </span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    Sub Region: <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </LeftBox>
              </LeftContent>
              <RightContent>
                <RightBox>
                  <p>
                    Top Level Domain: <span>{country.topLevelDomain}</span>
                  </p>
                  <p>
                    Currencies: <span>{country.currencies[0].name}</span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span>
                      {country.languages.map((language, index, arr) =>
                        index === arr.length - 1
                          ? `${language.name}`
                          : `${language.name}, `
                      )}
                    </span>
                  </p>
                </RightBox>
              </RightContent>
              <BorderCountries>
                <p>Border Countries:</p>
                {country.borders.map((border) => (
                  <BorderButton key={border}>{border}</BorderButton>
                ))}
              </BorderCountries>
            </DetailsContainer>
          </Content>
        </Container>
      )}
    </div>
  );
};

export default Details;

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 90vh;
  padding: 60px 50px;
  padding-right: 200px;
  box-shadow: inset 0.1px 0.1px 5px ${(props) => props.theme.shadow};
`;
const Content = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  padding-top: 50px;
`;

const Button = styled.button`
  display: flex;
  font-family: inherit;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 6px 24px;
  color: ${(props) => props.theme.fontColor};
  font-size: 14px;
  border: none;
  border-radius: 3px;
  background-color: ${(props) => props.theme.elements};
  -webkit-box-shadow: -1px 1px 5px 2px ${(props) => props.theme.shadow};
  box-shadow: -1px 1px 5px 2px ${(props) => props.theme.shadow};

  p {
    padding-left: 12px;
  }
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  align-items: center;
  grid-column-gap: 100px;
  grid-row-gap: 50px;
  grid-template-areas:
    "top top"
    "bottom bottom";
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    object-fit: cover;
    width: 70%;
    height: 100%;
  }
`;

const LeftContent = styled.div``;
const CountryTitle = styled.h3`
  padding-bottom: 20px;
`;

const LeftBox = styled.div`
  p {
    color: ${(props) => props.theme.fontColor};
    font-weight: 600;
    padding-bottom: 5px;
  }
  span {
    font-weight: 300;
  }
`;
const RightContent = styled(LeftBox)``;
const RightBox = styled.div``;
const BorderCountries = styled.div`
  grid-area: bottom;
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
    color: ${(props) => props.theme.fontColor};
    font-weight: 600;
  }
`;

const BorderButton = styled(Button)`
  display: inline-block;
  margin: 5px;
`;

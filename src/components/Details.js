import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  return (
    <div>
      <Container>
        <Button onClick={() => history.push("/")}>
          &larr;
          <p>Back</p>
        </Button>
        <Content>
          <ImageContainer>
            <img src="https://restcountries.eu/data/bel.svg" alt="" />
          </ImageContainer>

          <DetailsContainer>
            <LeftContent>
              <CountryTitle>Belgium</CountryTitle>
              <LeftBox>
                <p>
                  Native Name: <span>Belgie</span>
                </p>
                <p>
                  Population: <span>11,319,511</span>
                </p>
                <p>
                  Region: <span>Europe</span>
                </p>
                <p>
                  Sub Region: <span>Western Europe</span>
                </p>
                <p>
                  Capital: <span>Brussels</span>
                </p>
              </LeftBox>
            </LeftContent>
            <RightContent>
              <RightBox>
                <p>
                  Top Level Domain: <span>.be</span>
                </p>
                <p>
                  Currencies: <span>Euro</span>
                </p>
                <p>
                  Languages: <span>Dutch, French, German</span>
                </p>
              </RightBox>
            </RightContent>
            <BorderCountries>
              <p>Border Countries:</p>
              <BorderButton>France</BorderButton>
              <BorderButton>Germany</BorderButton>
              <BorderButton>Netherlands</BorderButton>
            </BorderCountries>
          </DetailsContainer>
        </Content>
      </Container>
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

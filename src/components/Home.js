import { useEffect, useState } from "react";
import styled from "styled-components";
import CountryList from "./CountryList";
import Search from "./Search";

const Home = () => {
  const [countries, setCountries] = useState([]);
  // const abortController = new AbortController();
  const [hasLoaded, setHasLoaded] = useState(false);
  const url = "https://restcountries.eu/rest/v2/all";

  const getCountries = async () => {
    try {
      // const res = await fetch("https://restcountries.eu/rest/v2/name/italy");
      const res = await fetch(url);

      if (!res.ok) throw new Error("Something is bad");
      const data = await res.json();

      const newCountries = data.map((country) => country);

      setCountries(newCountries);
      setHasLoaded(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCountries();
  }, [hasLoaded]);
  if (!hasLoaded)
    return (
      <Container>
        <h2>LOADING...</h2>
      </Container>
    );

  return (
    <Container>
      <Search />
      <CountryList countries={countries}></CountryList>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 90vh;
  padding: 20px 50px;
`;

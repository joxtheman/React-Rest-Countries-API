import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fafafa",
  fontColor: "	#111517",
  elements: "#ffff",
  input: "#858585",
  shadow: "rgba(133, 133, 133, 0.75)",
};

export const darkTheme = {
  body: "#202c37",
  fontColor: "	#ffff",
  elements: "hsl(209, 23%, 22%)",
  input: "#ffff",
  shadow: "hsl(209, 23%, 22%)",
};

export const GlobalStyles = createGlobalStyle`   
    body {
    background-color:${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    
}
select{
     background-color: ${(props) => props.theme.elements};
     color: ${(props) => props.theme.fontColor};
}


::placeholder {
    color: ${(props) => props.theme.input};
  }
`;

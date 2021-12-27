import React from "react";
import styled from "styled-components";
import imagesLight from "../assets/images/bg-mobile-light.jpg";
import imagesDark from "../assets/images/bg-mobile-dark.jpg";
import imagesLightDesktop from "../assets/images/bg-desktop-light.jpg";
import imagesDarkDesktop from "../assets/images/bg-desktop-dark.jpg";
import { ReactComponent as Moon } from "../assets/images/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/images/icon-sun.svg";
import { ReactComponent as Oval } from "../assets/images/Oval.svg";
import { ReactComponent as Fill } from "../assets/images/Fill.svg";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyle";
import { lightTheme, darkTheme } from "./Themes";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { styled } from "@mui/styles";

export function HeaderMobile(props) {
  const [theme, setTheme] = useState("light");
  const [empty, setEmpty] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const fillToggle = () => {
    setEmpty((prevState) => !prevState);
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const fillAction = empty ? (
    <Fill onClick={fillToggle} />
  ) : (
    <Oval onClick={fillToggle} />
  );

  const InputMobile = (
    <MyInput tema={theme}>
      {fillAction}
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Create a new todo..." required />
      </form>
      <Button variant="contained" onClick={submitHandler}>
        Upload
      </Button>
    </MyInput>
  );
  const InputDesktop = (
    <MyInputDesktop tema={theme}>
      {fillAction}
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Create a new todo..." required />
      </form>
      <Button variant="contained" onClick={submitHandler} className="btn">
        Upload
      </Button>
    </MyInputDesktop>
  );

  const headerMobile = (
    <HeaderMobileWrap images={theme}>
      <div className="wrap">
        <h1>todo</h1>
        {theme === "light" ? (
          <Moon onClick={themeToggler} />
        ) : (
          <Sun onClick={themeToggler} />
        )}
      </div>
      <div className="wrap_input">{InputMobile}</div>
    </HeaderMobileWrap>
  );

  const headerDesktop = (
    <HeaderDesktopWrap images={theme}>
      <div className="wrap">
        <h1>todo</h1>
        {theme === "light" ? (
          <Moon onClick={themeToggler} />
        ) : (
          <Sun onClick={themeToggler} />
        )}
      </div>
      <div className="wrap_input">{InputDesktop}</div>
    </HeaderDesktopWrap>
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {isDesktopOrLaptop ? headerDesktop : headerMobile}
    </ThemeProvider>
  );
}

const MyInput = styled.div`
  background: ${(props) => (props.tema === "light" ? "white" : "#25273D")};
  color: ${(props) => (props.tema === "light" ? "black" : "white")};
  width: 80vw;
  height: 48px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1.4rem 2rem;
  justify-content: space-between;
  form {
    display: flex;
    align-items: center;
  }
  input {
    background: ${(props) =>
      props.tema === "light" ? "white" : "transparent"};
    outline: none;
    border: none;
    width: 50vw;
    height: 2rem;
    margin-left: 1.2rem;
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
    color: ${(props) => (props.tema === "light" ? "#393A4B" : "#C8CBE7")};
  }
`;

const MyInputDesktop = styled.div`
  background: ${(props) => (props.tema === "light" ? "white" : "#25273D")};
  color: ${(props) => (props.tema === "light" ? "black" : "white")};
  width: 50vw;
  height: 48px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1.4rem 2rem;
  justify-content: space-between;
  form {
    display: flex;
    align-items: center;
  }
  input {
    background: ${(props) =>
      props.tema === "light" ? "white" : "transparent"};
    outline: none;
    border: none;
    width: 40vw;
    height: 2rem;
    margin-left: 1.2rem;
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.25px;
    color: ${(props) => (props.tema === "light" ? "#393A4B" : "#C8CBE7")};
  }
`;

const HeaderMobileWrap = styled.header`
  background: url(${(props) =>
      props.images === "light" ? imagesLight : imagesDark})
    no-repeat;
  background-size: cover;
  height: 20rem;
  position: relative;
  transition: all 0.5s ease;
  .wrap {
    width: 80%;
    position: absolute;
    top: 4.8rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    text-transform: uppercase;
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1rem;
  }
  .wrap_input {
    position: absolute;
    top: 10.8rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HeaderDesktopWrap = styled.header`
  background: url(${(props) =>
      props.images === "light" ? imagesLightDesktop : imagesDarkDesktop})
    no-repeat;
  background-size: cover;
  height: 30rem;
  position: relative;
  transition: all 0.5s ease;
  .wrap {
    width: 80%;
    position: absolute;
    top: 4.8rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    text-transform: uppercase;
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1rem;
  }
  .wrap_input {
    position: absolute;
    top: 15.8rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

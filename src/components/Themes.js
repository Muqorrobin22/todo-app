import styled from "styled-components";
import imagesLight from "../assets/images/bg-mobile-light.jpg";
import imagesDark from "../assets/images/bg-mobile-dark.jpg";
import imagesLightDesktop from "../assets/images/bg-desktop-light.jpg";
import imagesDarkDesktop from "../assets/images/bg-desktop-dark.jpg";

export const lightTheme = {
  body: "#ffffff",
  text: "#494C6B",
};
export const darkTheme = {
  body: "#25273D",
  text: "#ffffff",
};

export const MyInput = styled.div`
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

export const MyInputDesktop = styled.div`
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

export const HeaderMobileWrap = styled.header`
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
  .wrap_list {
    box-shadow: ${(props) =>
      props.tema === "light"
        ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
        : "20px 28px 40px 1px rgba(0, 0, 0, 0.5)"};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 17.2rem;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: ${(props) => (props.tema === "light" ? "white" : "#25273D")};
    color: ${(props) => (props.tema === "light" ? "black" : "#5B5E7E")};
    width: 80vw;
    height: 48px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1.4rem 2rem;
    box-shadow: ${(props) =>
      props.tema === "light"
        ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"
        : "20px 28px 40px 1px rgba(0, 0, 0, 0.5)"};
    p {
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
    }
    p:hover,
    p:active {
      color: #3a7cfd;
    }
    .disabled {
      opacity: 0.5;
    }
  }
`;

export const HeaderDesktopWrap = styled.header`
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

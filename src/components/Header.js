import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import SuggestUs from "./SuggestUsForm/SuggestUs";
import search from "../images/icons/search.svg";
import logo from "../images/logo.png";
import mensAndWomns from "../images/icons/mensAndWomns.png";
import leaf from "../images/icons/leaf.png";
import sparkles from "../images/icons/sparkles.png";
import drink from "../images/icons/drink.png";

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Link to="/">
          <img src={logo} alt="شعار رحب" />
          <h1>رحب </h1>
        </Link>
        <span>
          وجهات نقيّة <img src={leaf} css={"width:1.1rem"} alt="ورقة الشجر" /> وراقية {"  "}
          <img css={"width:1.1rem"} src={sparkles} alt="نجوم" /> لطلعات
        </span>
        <span className="MainTitle">
          الأهل والأصحاب
          <img src={drink} css={"width:1.1rem"} alt="شراب" />
        </span>
        <StyledInputDiv>
          <input
            value={this.props.searchedItem}
            placeholder="تأكد من ملاءمة وجهتك ..."
            onChange={this.props.ChangeSearch}
            onKeyPress={event => event.key === "Enter" && event.target.blur()}
          />
          {!this.props.searchedItem && <img src={search} css={"width:1.1rem"} alt="بحث" />}
        </StyledInputDiv>
        <SuggestUs />
        <img src={mensAndWomns} css={"width:8rem; transform: translateY(5rem);"} alt="الرجال و النساء" />
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
  grid-area: header;
  position: relative;
  background-color: var(--color-primary);
  box-shadow: 0px 2px 19px #d1e9f9;
  span {
    font-size: 1.2rem;
    font-weight: 600;
  }
  img {
    transform: translateY(5px);
  }
  .MainTitle {
    display: block;
    font-size: 2rem;
    line-height: 0.5;
    margin: 22px;
    margin-bottom: 43px;
    font-weight: bold;
  }
  a {
    width: fit-content;
    display: flex;
    align-items: center;
    color: black;
    margin: 0 auto;
    margin-bottom: 20px;
    transform: translateX(6rem);
    h1 {
      font-family: "Dubai-Light", sans-serif;
      font-size: 1.7rem;
      font-weight: 500;
    }
    img {
      width: 3rem;
      padding-left: 11px;
    }
  }
`;
const StyledInputDiv = styled.div`
  position: relative;
  margin: 0 auto;
  input {
    border: none;
    margin-top: 3px;
    height: 2.2rem;
    width: 11rem;
    border-radius: 50px;
    font-size: 0.8rem;
    box-shadow: 0px 0px 11px -2px rgba(150, 138, 150, 0.4);
    margin-bottom: 12px;
    text-align: right;
    padding-right: 0.9rem;
    padding-left: 1.8rem;
    line-height: normal;

    &::placeholder {
      text-align: center;
      transform: translateX(0.92rem);
      height: 100%;
    }
    &:focus::-webkit-input-placeholder {
      color: transparent;
    }
    &:focus {
      ~ img {
        display: none;
      }
    }
  }
  img {
    position: absolute;
    width: 0.8rem;
    transform: translateX(13rem);
    margin-top: 0.8rem;
  }
`;

export default Header;

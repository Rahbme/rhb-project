import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import { Normalize } from "styled-normalize";
import Metatags from "../components/Metatags";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background-color: white;
  grid-template-areas:
    "header"
    "content";
`;

class Layout extends React.Component {
  state = { search: "" };
  ChangeSearch = e => this.setState({ search: e.target.value });
  render() {
    return (
      <>
        <Normalize />
        <GlobalStyles />
        <Metatags title="رحب " description="دليل تفاعلي من الناس , للوجـهات الراقية والنقية لطلعات الأهل والأصحاب ( #بلا_موسيقى)" />
        <Container>
          <Header ChangeSearch={this.ChangeSearch} isInputFilled={this.state.search} />
          <MainContent searchedItem={this.state.search} />
        </Container>
      </>
    );
  }
}

export default Layout;

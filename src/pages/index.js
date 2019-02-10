import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SEO from "../components/SEO";
import GlobalStyles from "../components/GlobalStyles";
import { Normalize } from "styled-normalize";

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
  state = {
    search: "",
    category: "",
    AmountOfShownList: 0,
    hasMoreItems: true,
    randomNumber: Math.random()
  };
  ChangeSearch = e => this.setState({ search: (e && e.target.value) || "" });

  ChangeCategory = cate => {
    this.ChangeSearch();
    this.setState({ category: cate, AmountOfShownList: 0, hasMoreItems: true, randomNumber: Math.random() });
  };

  shuffleArray = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(this.state.randomNumber * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  ShowMoreItem = list => {
    if (this.state.AmountOfShownList >= list.length) {
      this.setState({ hasMoreItems: false });
      return;
    }
    let LoadingTime = this.state.AmountOfShownList === 0 ? 0 : 500;
    setTimeout(() => {
      this.setState(prevState => {
        return { AmountOfShownList: prevState.AmountOfShownList + 20 };
      });
    }, LoadingTime);
  };

  render() {
    const { search, category, AmountOfShownList, hasMoreItems, randomNumber } = this.state;
    return (
      <>
        <Normalize />
        <GlobalStyles />
        <SEO />
        <Container>
          <Header
            ChangeSearch={this.ChangeSearch}
            searchedItem={this.state.search}
            ChangeCategory={this.ChangeCategory}
          />
          <MainContent
            ChangeSearch={this.ChangeSearch}
            searchedItem={search}
            AmountOfShownList={AmountOfShownList}
            category={category}
            ChangeCategory={this.ChangeCategory}
            hasMoreItems={hasMoreItems}
            randomNumber={randomNumber}
            ShowMoreItem={this.ShowMoreItem}
            shuffleArray={this.shuffleArray}
          />
        </Container>
      </>
    );
  }
}

export default Layout;

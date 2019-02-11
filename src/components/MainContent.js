import React from "react";
import styled from "styled-components";
import Places from "./places";
import googleMap from "../images/icons/googleMap.png";
const Container = styled.div`
  grid-area: content;
  margin: 5px;
  img {
    width: 0.7rem;
  }
`;
const Text = styled.span`
  font-size: 0.8rem;
  color: #a8abad;
`;
const IndexPage = ({
  searchedItem,
  ChangeSearch,
  AmountOfShownList,
  category,
  ChangeCategory,
  hasMoreItems,
  randomNumber,
  ShowMoreItem,
  shuffleArray,
  places
}) => (
  <Container>
    <div css={"margin: 32px auto;"}>
      <Text>
        حالياً في الرياض، انقر على اسم المكان لتتجه مباشرة <br /> إلى التفاصيل في ” خرائط جوجل
      </Text>
      {"  "} <img src={googleMap} alt="خرائط قوقل" /> {"  "}
      <Text> “ </Text>
    </div>
    <Places
      searchedItem={searchedItem}
      ChangeSearch={ChangeSearch}
      AmountOfShownList={AmountOfShownList}
      category={category}
      ChangeCategory={ChangeCategory}
      hasMoreItems={hasMoreItems}
      randomNumber={randomNumber}
      ShowMoreItem={ShowMoreItem}
      shuffleArray={shuffleArray}
      places={places}
    />
  </Container>
);

export default IndexPage;

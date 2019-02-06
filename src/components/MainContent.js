import React from "react";
import styled from "styled-components";
import Places from "../templates/places-post";
import googleMap from "../images/icons/googleMap.png";
const Container = styled.div`
  grid-area: content;
  margin: 5px;
  img {
    width: 0.7rem;
  }
`;
const MainContent = styled.span`
  font-size: 0.8rem;
  color: #a8abad;
`;
const IndexPage = ({ searchedItem, ChangeSearch }) => (
  <Container>
    <div css={"margin: 32px auto;"}>
      <MainContent>
        حالياً في الرياض، انقر على اسم المكان لتتجه مباشرة <br /> إلى التفاصيل في ” خرائط جوجل
      </MainContent>
      {"  "} <img src={googleMap} alt="خرائط قوقل" /> {"  "}
      <MainContent> “ </MainContent>
    </div>
    <Places searchedItem={searchedItem} ChangeSearch={ChangeSearch} />
  </Container>
);

export default IndexPage;

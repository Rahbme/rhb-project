import React from "react";
import styled from "styled-components";
import Places from "../templates/places-post";
import googleMap from "../images/icons/googleMap.png";
const Container = styled.div`
  grid-area: content;
  margin: 5px;
  span {
    font-size: 0.8rem;
    color: #a8abad;
  }
  img {
    width: 0.7rem;
  }
`;

const IndexPage = ({ searchedItem }) => (
  <Container>
    <div css={"margin: 32px auto;"}>
      <span>
        حالياً في الرياض، انقر على اسم المكان لتتجه مباشرة <br /> إلى التفاصيل في ” خرائط جوجل
      </span>
      {"  "} <img src={googleMap} alt="خرائط قوقل" /> {"  "}
      <span> “ </span>
    </div>
    <Places searchedItem={searchedItem} />
  </Container>
);

export default IndexPage;

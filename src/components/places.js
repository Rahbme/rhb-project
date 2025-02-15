import React from "react";
import styled from "styled-components";
import Button, { ItemButton } from "./Button";
import forksAndKnifeAndPlate from "../images/icons/forksAndKnifeAndPlate.png";
import cafe from "../images/icons/cafe.png";
import InfiniteScroll from "react-infinite-scroller";
const Container = styled.div`
  position: relative;
  ul {
    padding-right: 0;
    li {
      list-style: none;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 19px;
    }
  }
`;
const GroupButtons = styled.div`
  display: flex;
  margin-bottom: 36px;
  justify-content: center;

  & > button {
    margin-top: -16px;
    font-size: 1rem;
    font-family: "Dubai-Light", sans-serif;
    padding: 0;
  }
  img {
    width: 1.4rem !important;
    height: 1.5rem;
    padding-left: 4px;
  }
  button {
    &:first-child {
      margin-left: 0.5rem;
    }
    &:last-child {
      margin-right: 0.5rem;
    }
  }
`;
export const PlacesComponent = ({ list, ChangeCategory, category, AmountOfShownList, ShowMoreItem, hasMoreItems }) => (
  <Container>
    <GroupButtons>
      <Button
        onClick={() => category !== "resturants" && ChangeCategory("resturants")}
        category={category === "resturants"}
        isIcon="true"
      >
        <img src={forksAndKnifeAndPlate} alt="مطاعم" />
        مطاعم
      </Button>
      <Button
        onClick={() => category !== "cafes" && ChangeCategory("cafes")}
        category={category === "cafes"}
        isIcon="true"
      >
        <img src={cafe} alt="كافيهات" />
        كافيهات
      </Button>
    </GroupButtons>
    {Array.isArray(list) ? (
      <ul>
        <InfiniteScroll
          pageStart={0}
          loadMore={() => ShowMoreItem(list)}
          hasMore={hasMoreItems}
          loader={AmountOfShownList !== 0 && <p key={0}>المزيد ...</p>}
        >
          {list.slice(0, AmountOfShownList).map(({ name, EnName, url }) => (
            <li key={url}>
              <a href={url}>
                <ItemButton width="93%" height="73px" BorderRadius="10px">
                  {name && name}
                  {EnName && <span>({EnName})</span>}
                </ItemButton>
              </a>
            </li>
          ))}
        </InfiniteScroll>
      </ul>
    ) : (
      <p>{list}</p>
    )}
  </Container>
);

class Places extends React.Component {
  render() {
    const {
      AmountOfShownList,
      category,
      hasMoreItems,
      searchedItem,
      ChangeCategory,
      ShowMoreItem,
      shuffleArray,
      places
    } = this.props;
    let list = "";
    if (searchedItem) {
      list = places.filter(
        ({ name, EnName }) =>
          (name && name.replace(/[اأإآ]/g, "ا").includes(searchedItem.trim().replace(/[اأإآ]/g, "ا"))) ||
          (EnName && EnName.toLowerCase().includes(searchedItem.toLowerCase().trim()))
      );
      if (list.length === 0) list = "لم يتم العثور على ماتبحث عنه";
    } else if (category === "cafes")
      list = places.filter(({ tags }) => tags.find(tag => tag === "كافيه" || tag === "مطعم وكافيه"));
    else if (category === "resturants")
      list = places.filter(({ tags }) => tags.find(tag => tag === "مطعم وكافيه" || tag === "مطعم"));

    return (
      <PlacesComponent
        searchedItem={searchedItem}
        category={category}
        list={Array.isArray(list) ? shuffleArray(list) : list}
        hasMoreItems={hasMoreItems}
        ShowMoreItem={ShowMoreItem}
        AmountOfShownList={AmountOfShownList}
        ChangeCategory={ChangeCategory}
      />
    );
  }
}

export default Places;

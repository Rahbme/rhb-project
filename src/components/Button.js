import React from "react";
import styled, { css } from "styled-components";

const ButtonComponent = ({
  children,
  onClick,
  fontFamily,
  width,
  BGColor,
  isIcon = false,
  BorderRadius,
  category,
  fontSize,
  height,
  fontWeight
}) => (
  <StyledButton
    onClick={onClick}
    width={width}
    isIcon={isIcon}
    BGColor={BGColor}
    BorderRadius={BorderRadius}
    category={category}
    height={height}
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={fontWeight}
  >
    {children}
  </StyledButton>
);

export const StyledButton = styled.button`
  border: none;
  margin: auto;
  width: ${props => props.width || "min-content"};
  height: ${props => props.height || "50px"};
  cursor: pointer;
  background-color: ${props => props.BGColor || "inherit"};
  margin-top: 3px;
  border-radius: ${props => props.BorderRadius && props.BorderRadius};
  font-family: ${props => props.fontFamily && props.fontFamily};
  font-size: ${props => props.fontSize && props.fontSize};
  font-weight: ${props => props.fontWeight && props.fontWeight};

  ${props =>
    props.category &&
    css`
      border-bottom: 1px #e3e3e3 solid;
    `};
  img {
    height: 100%;
  }
  ${props =>
    props.isIcon &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const ItemButton = styled(StyledButton)`
  margin: 0 auto;
  box-shadow: 0px 0px 11px -4px rgba(150, 138, 150, 0.4);
  max-width: 400px;
  border: 1.4px #f5f5f5 solid;
  text-align: right;
  font-size: 1rem;
  margin-top: -3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
  span {
    display: block;
    margin-top: 5px;
    font-size: 0.7rem;
    color: #a8abad;
  }
`;

export const SuggestButton = styled(StyledButton)`
  font-family: "Dubai-Light", sans-serif;
  height: 2.2rem;
  width: 13.3rem;
  font-weight: 600;
  border-radius: 50px;
  font-size: 0.8rem;
  box-shadow: 0px 0px 11px -2px rgba(150, 138, 150, 0.4);
  margin: 0 auto;
  margin-bottom: 28px;
  img {
    left: 10px;
    margin-top: -0.6rem;
    width: 1.1rem;
    height: 1rem;
    padding-left: 11px;
  }
`;
export default ButtonComponent;

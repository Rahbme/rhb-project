import React from "react";
import styled from "styled-components";

const Input = ({ Forlabel, name, type = "text", required }) => (
  <>
    {/* {Forlabel && <label htmlFor={Forlabel}>{Forlabel}</label>} */}
    <StyledInput name={name} type={type} placeholder={Forlabel} required={required} />
  </>
);

const StyledInput = styled.input`
  margin: 0 0.25rem;
  min-width: 125px;
  border: 1px solid #eee;
  border-radius: 5px;
  color: block;
`;

export default Input;

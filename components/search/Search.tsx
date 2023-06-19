import React from "react";
import FormInput from "../form/FormInput";
import { styled } from "styled-components";

const Search = () => {
  return (
    <StSearchWrap>
      <FormInput />
    </StSearchWrap>
  );
};

export default Search;

const StSearchWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

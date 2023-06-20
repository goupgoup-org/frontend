import React, { HTMLAttributes } from "react";
import { styled } from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  props?: any;
}

const SearchButton = ({ text = "", ...props }: Props) => {
  return (
    <StButton {...props}>{text.length > 0 && <span>{text}</span>}</StButton>
  );
};

export default SearchButton;

const StButton = styled.button``;

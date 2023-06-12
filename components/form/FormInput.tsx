import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
}

const FormInput = ({ name = "", type = "", ...props }: Props) => {
  return <Input type={type} name={name} {...props} />;
};

export default FormInput;

const Input = styled.input``;

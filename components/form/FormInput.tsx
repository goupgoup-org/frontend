import { ChangeEvent, HTMLAttributes } from "react";
import styled from "styled-components";

type SetterOrUpdater = any;

interface Props extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  setValue?: SetterOrUpdater;
  props?: any;
}

const FormInput = ({ name = "", type = "text", setValue, ...props }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Input type={type} name={name} {...props} onChange={onChangeHandler} />
  );
};

export default FormInput;

const Input = styled.input``;

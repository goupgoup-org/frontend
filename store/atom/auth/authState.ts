import { atom } from "recoil";

export interface SignIn {
  userId: string;
  password: string;
}

const signInInitialState = {
  userId: "",
  password: "",
};

export const signInValueState = atom<SignIn>({
  key: "signInState",
  default: signInInitialState,
});

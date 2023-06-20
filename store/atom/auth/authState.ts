import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface SignIn {
  email: string;
  nickname: string;
}

const userInitialState = {
  email: "",
  nickname: "",
};

const { persistAtom } = recoilPersist();

export const userStateValue = atom<SignIn>({
  key: "userStateValue",
  default: userInitialState,
  effects_UNSTABLE: [persistAtom],
});

import { atom } from "recoil";

export interface Toast {
  id: string;
  message: string;
}

export const toastState = atom<Toast[]>({
  key: "toastState",
  default: [],
});

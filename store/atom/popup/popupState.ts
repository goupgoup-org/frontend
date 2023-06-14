import { atom } from "recoil";

export interface Popup {
  visible: boolean;
  list: [];
}

export const popupState = atom<Popup>({
  key: "popupState",
  default: {
    visible: false,
    list: [],
  },
});

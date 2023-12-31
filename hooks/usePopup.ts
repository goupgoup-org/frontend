import { popupState } from "@/store/atom/popup/popupState";
import { getRandomId } from "@/utils/etc";
import { useRecoilState } from "recoil";

interface UsePopupResult {
  popups: object;
  removePopup: (id: string) => void;
  showPopup: (popup: any) => void;
}
const usePopup = (): UsePopupResult => {
  const [popups, setPopups] = useRecoilState(popupState);

  const removePopup = (id: string) => {
    setPopups((prev: any) => {
      let result = prev?.list.filter((popup: any) => popup.id !== id);

      return {
        ...prev,
        visible: false,
        list: [...result],
      };
    });
  };

  const showPopup = (popup: any) => {
    const popupId = getRandomId();
    console.log("???");

    setPopups((prev: any) => ({
      ...prev,
      visible: true,
      list: [
        ...prev?.list,
        {
          ...popup,
          id: popupId,
        },
      ],
    }));
  };

  return { popups, showPopup, removePopup };
};

export default usePopup;

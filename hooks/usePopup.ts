import { getRandomId } from "@/utils/etc";
import { useRecoilState } from "recoil";

interface UsePopupResult {
  popups: object;
  removePopup: (id: string) => void;
  showPopup: (popup: any) => void;
}
const usePopup = (): UsePopupResult => {
  const [popups, setPopups] = useRecoilState();

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

    setPopups((prev: any) => ({
      ...prev,
      visible: true,
      lis: [
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

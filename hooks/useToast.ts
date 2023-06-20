import { toastState } from "@/store/atom/toast/toastState";
import { getRandomId } from "@/utils/etc";
import { useRecoilState } from "recoil";

interface UseToastResult {
  toasts: any;
  firedToast: (toast: any) => void;
}

const useToast = (): UseToastResult => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeToast = (id: String) => {
    setToasts((prev: any) => prev.filter((toast: any) => toast.id !== id));
  };

  const firedToast = (toast: any) => {
    const toastId = getRandomId();

    setToasts((prev: any) => [
      ...prev,
      {
        ...toast,
        id: toastId,
        duration: toast.duration ?? 1000,
        type: toast.tpye,
      },
    ]);

    setTimeout(() => removeToast(toastId), 500 + (toast.duration ?? 1000));
  };

  return { toasts, firedToast };
};

export default useToast;

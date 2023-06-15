import { useCallback } from "react";
import { headerData } from "@/constants/HeaderData";
import Link from "next/link";
import FormInput from "../form/FormInput";
import usePopup from "@/hooks/usePopup";
import Search from "../search/Search";

export const Header = () => {
  const { showPopup } = usePopup();

  const popupHandler = useCallback(() => {
    showPopup({
      content: <Search />,
    });
  }, []);

  return (
    <header>
      <div>로고</div>
      {headerData.map((item) => (
        <Link key={item.id} href={item.url}>
          {item.label}
        </Link>
      ))}
      <FormInput onClick={popupHandler} placeholder="Search" />
    </header>
  );
};

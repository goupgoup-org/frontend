import { useCallback } from "react";
import { menuList } from "@/constants/HeaderData";
import Link from "next/link";
import FormInput from "../form/FormInput";
import usePopup from "@/hooks/usePopup";
import Search from "../search/Search";
import SearchButton from "../search/SearchButton";

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
      {menuList.map((item) => (
        <Link key={item.id} href={item.url}>
          {item.label}
        </Link>
      ))}
      <SearchButton text="Search apps" onClick={popupHandler} />
    </header>
  );
};

import usePopup from "@/hooks/usePopup";
import { popupState } from "@/store/atom/popup/popupState";
import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import PopupItem from "./PopupItem";

type DimmedProps = {
  visible: boolean;
};

const Popup = () => {
  const popups = useRecoilValue(popupState);
  const { removePopup } = usePopup();

  const closeHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    if (e.target !== e.currentTarget) return;
    removePopup(id);
  };

  return (
    <div>
      {popups?.list?.map((popup: any, index: number) => (
        <Dimmed
          key={index}
          visible={popups?.visible}
          onClick={(e) => closeHandler(e, popup.id)}
        >
          <PopupItem {...popup} />
        </Dimmed>
      ))}
    </div>
  );
};

export default Popup;

const Dimmed = styled.div<DimmedProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1000;
`;

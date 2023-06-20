import React from "react";

interface PopupItemProps {
  content: any;
}

const PopupItem = ({ content }: PopupItemProps) => {
  return (
    <div>
      <h2>POPUP</h2>
      {content}
    </div>
  );
};

export default PopupItem;

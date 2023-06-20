import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const Item = () => {
  return (
    <StItemWrap>
      <Link href={`/detail/1`}>
        <StItemHead>
          <Image src={""} alt="" />
          <StItemTitle>
            <h3>타이틀</h3>
            <p>키워드</p>
          </StItemTitle>
        </StItemHead>
      </Link>
    </StItemWrap>
  );
};

export default Item;

const StItemWrap = styled.div``;

const StItemHead = styled.div``;

const StItemTitle = styled.div``;

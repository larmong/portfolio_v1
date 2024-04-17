import {
  BtnGroup,
  CloseBtn,
  ImgBox,
  ModalWrapper,
  TagGroup,
  TextCont,
  TitleWrapper,
  Wrapper,
} from "@components/modal/style";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import TagIcon from "@components/card/tags";
import { CustomMouseEvent } from "@commons/types/global.types";
import { useState } from "react";
import { IPropsModalType } from "@components/modal/type";

export default function Modal({ isModal }: IPropsModalType) {
  const tags = [
    "react",
    "javascript",
    "typescript",
    "vue",
    "styled-components",
    "emotion",
    "figma",
    "html",
    "css",
  ];

  const handleMoveToLink = (e: CustomMouseEvent) => {
    if (e.currentTarget.id === "code") {
      // code 페이지 이동
    } else {
      // view 페이지 이동
    }
  };

  return (
    <Wrapper isModal={isModal}>
      <ModalWrapper isModal={isModal}>
        <div className="top-cont">
          <TitleWrapper>
            <span>Web</span>
            <p>텍스트가 흩날리는 모션 텍스트가 흩날리는 모션</p>
          </TitleWrapper>
          <CloseBtn>
            <IoMdClose />
          </CloseBtn>
        </div>
        <div className="center-cont">
          <ImgBox
            style={{
              background: `url('https://source.unsplash.com/random/?design')center center / cover no-repeat`,
            }}
          ></ImgBox>
        </div>
        <div className="bottom-cont">
          <TagGroup>
            {tags.map((tag: string, idx: number) => (
              <li key={`${tags}_${idx}`}>
                <TagIcon tag={tag} />
              </li>
            ))}
          </TagGroup>
          <BtnGroup>
            <div className="code" id="code" onClick={handleMoveToLink}>
              <FaGithub />
              <span>CODE</span>
            </div>
            <div className="view" id="view" onClick={handleMoveToLink}>
              <RiPagesFill />
              <span>VIEW</span>
            </div>
          </BtnGroup>
          <TextCont>
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            1텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            2텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            3텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            4텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            5텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
            텍스트가 흩날리는 모션 텍스트가 흩날리는 모션 <br />
          </TextCont>
        </div>
      </ModalWrapper>
    </Wrapper>
  );
}

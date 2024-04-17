import { useRecoilState, useRecoilValue } from "recoil";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";

import { PostDataType } from "@components/card/type";
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
import { isModalState, isPostsState } from "@store/store";
import { CustomMouseEvent } from "@commons/types/global.types";
import TagIcon from "@components/tag";

export default function Modal() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const isPost = useRecoilValue<PostDataType | null>(isPostsState);
  const [isModal, setIsModal] = useRecoilState<boolean>(isModalState);

  const handleMoveToLink = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const handleCloseModal = (e: CustomMouseEvent) => {
    if (modalRef && e.target === modalRef.current) {
      setIsModal(false);
    }
  };

  return (
    <Wrapper ref={modalRef} isModal={isModal} onClick={handleCloseModal}>
      <ModalWrapper isModal={isModal}>
        <div className="top-cont">
          <TitleWrapper>
            <span>{isPost?.category}</span>
            <p>{isPost?.title}</p>
          </TitleWrapper>
          <CloseBtn
            onClick={() => {
              setIsModal(false);
            }}
          >
            <IoMdClose />
          </CloseBtn>
        </div>
        <div className="center-cont">
          <ImgBox
            style={{
              background: `url('${isPost?.thumb}')center center / cover no-repeat`,
            }}
          ></ImgBox>
        </div>
        <div className="bottom-cont">
          <TagGroup>
            {isPost?.tags.map((tag: string, idx: number) => (
              <li key={`${tag}_${idx}`}>
                <TagIcon tag={tag} />
              </li>
            ))}
          </TagGroup>
          <TextCont>{isPost?.cont}</TextCont>
          <BtnGroup>
            <div
              className="code"
              onClick={() => handleMoveToLink(`${isPost?.code}`)}
            >
              <FaGithub />
              <span>CODE</span>
            </div>
            <div
              className="view"
              onClick={() => handleMoveToLink(`${isPost?.view}`)}
            >
              <RiPagesFill />
              <span>VIEW</span>
            </div>
          </BtnGroup>
        </div>
      </ModalWrapper>
    </Wrapper>
  );
}

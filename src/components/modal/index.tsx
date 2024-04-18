import { useRecoilState, useRecoilValue } from 'recoil';
import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { RiPagesFill } from 'react-icons/ri';

import { isModalState, isPostsState } from '@store/store';
import { CustomMouseEvent } from '@commons/types/global.types';
import { ITypeProject } from '@commons/libraries/firebase/data.types';
import {
  BtnGroup,
  CloseBtn,
  ImgBox,
  ModalWrapper,
  TagGroup,
  TextCont,
  TitleWrapper,
  Wrapper,
} from '@components/modal/style';
import TagIcon from '@components/tag';

export default function Modal() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const isPost = useRecoilValue<ITypeProject>(isPostsState);
  const [isModal, setIsModal] = useRecoilState<boolean>(isModalState);

  const handleMoveToLink = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
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
            <span>{isPost?.categoryId}</span>
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
          <BtnGroup>
            <div className="code" onClick={() => handleMoveToLink(`${isPost?.view?.code}`)}>
              <FaGithub />
              <span>CODE</span>
            </div>
            <div className="view" onClick={() => handleMoveToLink(`${isPost?.view?.page}`)}>
              <RiPagesFill />
              <span>VIEW</span>
            </div>
          </BtnGroup>
          <TagGroup>
            {isPost?.skills?.map((skill: string, idx: number) => (
              <li key={`${skill}_${idx}`}>
                <TagIcon tag={skill} />
              </li>
            ))}
          </TagGroup>

          <TextCont>
            <ul>
              <li className="optimization">
                {isPost?.cont.optimization.map((optimization: string) => (
                  <span>{optimization}</span>
                ))}
              </li>
              <li>{isPost?.cont.percent}</li>
              <li>
                {isPost?.startDate} ~ {isPost?.endDate}
              </li>
              <li>{isPost.cont.unit}</li>
              <li className="dec">{isPost?.dec}</li>
            </ul>
          </TextCont>
        </div>
      </ModalWrapper>
    </Wrapper>
  );
}

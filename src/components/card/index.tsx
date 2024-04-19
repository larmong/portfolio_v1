import { useLayoutEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

import { isModalState, isPostsState } from "@store/store";
import { ICardProps } from "@components/card/type";
import { ITypeProject } from "@commons/libraries/firebase/data.types";
import { Wrapper } from "@components/card/style";
import TagIcon from "@components/tag";
import useResizeHandler from "@commons/hooks/resize";

export default function Card({ post }: ICardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState<any>(0);
  const setIsPost = useSetRecoilState<ITypeProject>(isPostsState);
  const setIsModal = useSetRecoilState<boolean>(isModalState);

  const handleMoveToDetail = () => {
    setIsPost(post);
    setIsModal(true);
  };

  const handleResize = () => {
    if (cardRef.current) {
      setCardWidth(cardRef.current?.clientWidth);
    }
  };

  useResizeHandler(handleResize);

  useLayoutEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current?.clientWidth);
    }
  }, []);

  return (
    <Wrapper ref={cardRef}>
      <div
        onClick={handleMoveToDetail}
        className="img-wrapper"
        style={{
          height: `${cardWidth}px`,
          background: `url('${post?.thumb}')
      center center / cover no-repeat`,
        }}
      ></div>
      <div className="text-wrapper">
        <span>{post?.categoryId}</span>
        <p>
          <i onClick={handleMoveToDetail}>{post?.title}</i>
        </p>
        <ul>
          {post?.skills?.map((skill: string, idx: number) => (
            <li key={`${post?.id}_skill_${idx}`}>
              <TagIcon tag={skill} />
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

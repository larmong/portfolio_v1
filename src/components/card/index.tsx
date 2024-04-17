import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

import { ICardProps, PostDataType } from "@components/card/type";
import { isModalState, isPostsState } from "@store/store";
import { Wrapper } from "@components/card/style";
import TagIcon from "@components/tag";

export default function Card({ post }: ICardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const setIsPost = useSetRecoilState<PostDataType | null>(isPostsState);
  const setIsModal = useSetRecoilState<boolean>(isModalState);

  const { id, category, title, tags, thumb } = post;
  const [cardWidth, setCardWidth] = useState<any>(0);

  const handleMoveToDetail = () => {
    setIsPost(post);
    setIsModal(true);
  };

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current?.clientWidth);
    }
  }, [cardRef.current]);

  return (
    <Wrapper ref={cardRef}>
      <div
        onClick={handleMoveToDetail}
        className="img-wrapper"
        style={{
          height: `${cardWidth}px`,
          background: `url('${thumb}')
      center center / cover no-repeat`,
        }}
      ></div>
      <div className="text-wrapper">
        <span>{category}</span>
        <p>
          <i onClick={handleMoveToDetail}>{title}</i>
        </p>
        <ul>
          {tags.map((tag: string, idx: number) => (
            <li key={`${tags}_${idx}`}>
              <TagIcon tag={tag} />
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { Wrapper } from '@components/card/style';
import { ICardProps } from '@components/card/type';

export default function Card({ post }: ICardProps) {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { id, category, title, tags, thumb } = post;
  const [cardWidth, setCardWidth] = useState<any>(0);

  const handleMoveToDetail = () => {
    navigate(`${id}`);
  };

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current?.clientWidth);
    }
  }, [cardRef.current]);

  return <Wrapper ref={cardRef}>
    <div
      onClick={handleMoveToDetail}
      className='img-wrapper'
      style={{
        height: `${cardWidth}px`,
        background: `url('${thumb}')
      center center / cover no-repeat`,
      }}
    ></div>
    <div className='text-wrapper'>
      <span>{category}</span>
      <p>
        <i onClick={handleMoveToDetail}>{title}</i>
      </p>
      <ul>
        {tags.map((tag: string, idx: number) => (
          <li key={`${tags}_${idx}`}>{tag}</li>
        ))}
      </ul>
    </div>
  </Wrapper>;
}
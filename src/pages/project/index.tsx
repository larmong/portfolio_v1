import Board from '@components/board';
import { useEffect, useState } from 'react';
import { PostDataType } from '@components/card/type';

export default function Project() {
  const [posts, setPosts] = useState<PostDataType[] | []>([]);

  const getBoardData = async () => {
    try {
      const result = await fetch('http://localhost:3000/data/button.json', {
        method: 'GET',
      });

      const { data }: { data: PostDataType[] | [] } = await result.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getBoardData();
  }, []);

  return (
    <>
      <Board posts={posts} />
    </>
  );
}

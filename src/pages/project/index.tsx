import { useEffect, useState } from "react";
import { PostDataType } from "@components/card/type";

import { Wrapper } from "@pages/project/style";
import Board from "@components/board";
import Modal from "@components/modal";

export default function Project() {
  const [posts, setPosts] = useState<PostDataType[] | []>([]);
  const [isModal, setIsModal] = useState<boolean>(true);

  const getBoardData = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/assets/data/data.json",
        {
          method: "GET",
        }
      );

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
    <Wrapper>
      <div className="container">
        <Board posts={posts} setIsModal={setIsModal} />
      </div>
      <Modal isModal={isModal} />
    </Wrapper>
  );
}

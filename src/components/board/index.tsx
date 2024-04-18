import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Pagination, Empty } from "antd";

import { ITypeProject } from "@commons/libraries/firebase/data.types";
import { isPostDataState } from "@store/store";
import {
  BoardWrapper,
  CardWrapper,
  PaginationWrapper,
  Wrapper,
} from "@components/board/style";
import Card from "@components/card";

export default function Board() {
  const isPostData = useRecoilValue(isPostDataState);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      {isPostData && isPostData.length !== 0 ? (
        <>
          <BoardWrapper>
            {isPostData
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((post: ITypeProject, idx: number) => (
                <CardWrapper key={idx}>
                  <Card key={idx} post={isPostData && post} />
                </CardWrapper>
              ))}
          </BoardWrapper>
          <PaginationWrapper>
            <Pagination
              defaultCurrent={currentPage}
              pageSize={pageSize}
              total={isPostData.length}
              onChange={handlePageChange}
            />
          </PaginationWrapper>
        </>
      ) : (
        <Empty
          style={{ padding: "100px 0" }}
          description="게시물이 없습니다."
        />
      )}
    </Wrapper>
  );
}

import { useState } from 'react';
import { Pagination, Empty } from 'antd';

import { IBoardProps } from '@components/board/type';
import { PostDataType } from '@components/card/type';
import { BoardWrapper, CardWrapper, PaginationWrapper, Wrapper } from '@components/board/style';
import Card from '@components/card';

export default function Board({ posts }: IBoardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      {posts.length !== 0 ? (
        <>
          <BoardWrapper>
            {posts
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((post: PostDataType, idx: number) => (
                <CardWrapper key={idx}>
                  <Card key={idx} post={post} />
                </CardWrapper>
              ))}
          </BoardWrapper>
          <PaginationWrapper>
            <Pagination
              defaultCurrent={currentPage}
              pageSize={pageSize}
              total={posts.length}
              onChange={handlePageChange}
            />
          </PaginationWrapper>
        </>
      ) : (
        <Empty style={{ padding: '100px 0' }} description="게시물이 없습니다." />
      )}
    </Wrapper>
  );
}

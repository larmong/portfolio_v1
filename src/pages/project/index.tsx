import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "@commons/libraries/firebase/firebase.config";
import { filterIsPostDataState } from "@store/selector";
import {
  getPostDataState,
  isPostDataState,
  projectCategoryState,
} from "@store/store";
import { ITypeProject } from "@commons/libraries/firebase/data.types";
import { BoardTab, Wrapper } from "@pages/project/style";
import Board from "@components/board";
import Modal from "@components/modal";

export default function Project() {
  const [data, setData] = useRecoilState<ITypeProject[] | []>(getPostDataState);
  const [category, setCategory] = useRecoilState<string>(projectCategoryState);
  const filterData = useRecoilValue<ITypeProject[] | []>(filterIsPostDataState);
  const setIsPostData = useSetRecoilState<ITypeProject[] | []>(isPostDataState);
  const tabList = ["all", "statics", "react"];

  useEffect(() => {
    if (data.length === 0) {
      void getBoardData();
    } else {
      void setIsPostData(filterData);
    }
  }, [category]);

  const getBoardData = async () => {
    const data = await query(
      collection(db, "projects"),
      orderBy("num", "desc")
    );
    const getData = await getDocs(data);
    const result: ITypeProject[] | [] = getData.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setData(result);
    setIsPostData(result);
  };

  return (
    <Wrapper>
      <div className="container">
        <BoardTab>
          {tabList.map((tab: string, idx: number) => (
            <li
              key={idx}
              className={category === tab ? "active" : ""}
              onClick={() => {
                setCategory(tab);
              }}
            >
              {tab}
            </li>
          ))}
        </BoardTab>
        <Board />
      </div>
      <Modal />
    </Wrapper>
  );
}

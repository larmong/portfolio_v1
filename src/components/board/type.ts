import { PostDataType } from "@components/card/type";
import { Dispatch, SetStateAction } from "react";

export type IBoardProps = {
  posts: PostDataType[] | [];
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

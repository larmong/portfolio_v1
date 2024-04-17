import { Dispatch, SetStateAction } from "react";

export interface PostDataType {
  id: string;
  name: string;
  category: string;
  title: string;
  thumb: string;
  cont: string;
  tags: string[];
}

export type ICardProps = {
  post: PostDataType;
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

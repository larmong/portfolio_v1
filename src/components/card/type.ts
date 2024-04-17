export interface PostDataType {
  id: string | number;
  name: string;
  category: string;
  createdDt: string;
  title: string;
  thumb: string;
  cont: string;
  tags: string[];
  code: string;
  view: string;
}

export type ICardProps = {
  post: PostDataType;
};

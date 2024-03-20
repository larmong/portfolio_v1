import { Dispatch, SetStateAction } from 'react';

export interface ITabPropsType {
  tabTitle: string;
  setTabTitle: Dispatch<SetStateAction<string>>;
  lists: IListsType[];
}

export interface IListsType {
  title: string;
  cont: string;
}
export interface IsLengthType {
  isLength: number;
}

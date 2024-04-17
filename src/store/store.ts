import { atom } from "recoil";
import { PostDataType } from "@components/card/type";

export const routeState = atom<string>({
  key: "routeState",
  default: "/",
});

export const isModalState = atom<boolean>({
  key: "isModalState",
  default: false,
});

export const isPostsState = atom<PostDataType | null>({
  key: "isPostsState",
  default: null,
});

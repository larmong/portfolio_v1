import { atom } from 'recoil';

export const routeState = atom<string>({
  key: 'routeState',
  default: '/',
});

export const postsState = atom({
  key: 'postsState',
  default: [],
});

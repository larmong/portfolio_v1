import { selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { ITypeProject } from '@commons/libraries/firebase/data.types';
import { getPostDataState, isPostDataState, projectCategoryState } from '@store/store';

export const filterIsPostDataState = selector<ITypeProject[] | []>({
  key: `filterIsPostDataState_${uuidv4()}`,
  get: ({ get }) => {
    const data = get(getPostDataState);
    const category = get(projectCategoryState);
    let filterData;

    switch (category) {
      case 'static':
        filterData = data.filter((post: ITypeProject) => post.categoryId === 'static');
        return filterData;
      case 'react':
        filterData = data.filter((post: ITypeProject) => post.categoryId === 'react');
        return filterData;
      case 'django':
        filterData = data.filter((post: ITypeProject) => post.categoryId === 'django');
        return filterData;
      default:
        return data;
    }
  },
});

export const setIsPostDataState = selector({
  key: `setIsPostDataState_${uuidv4()}`,
  get: ({ get }) => {
    return get(isPostDataState);
  },
  set: ({ set }, data) => {
    set(isPostDataState, data);
  },
});

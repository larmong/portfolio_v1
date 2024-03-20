import { TabWrapper, Wrapper } from '@components/tab/style';
import { IListsType, ITabPropsType } from '@components/tab/type';

export default function Tab({ tabTitle, setTabTitle, lists }: ITabPropsType) {
  return (
    <Wrapper>
      <h3>{tabTitle}</h3>
      <TabWrapper isLength={lists.length}>
        {lists.map((list: IListsType, idx: number) => (
          <li
            key={list.title}
            className={list.title === tabTitle ? 'active' : ''}
            onClick={() => {
              setTabTitle(list.title);
            }}
          >
            <p>{list.title}</p>
            <span>{list.cont}</span>
            <span>0{idx + 1}</span>
          </li>
        ))}
      </TabWrapper>
    </Wrapper>
  );
}

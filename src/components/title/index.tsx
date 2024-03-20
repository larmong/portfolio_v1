import { Wrapper } from '@components/title/style';

export default function Title({ name, num }: { name: string; num: string }) {
  return (
    <Wrapper>
      <span>{name}</span>
      <span># {num}</span>
    </Wrapper>
  );
}

import { SiTistory } from 'react-icons/si';
import { FaGithub, FaFilePdf } from 'react-icons/fa';

import { ContDec, IconBox, LinkBtn, Menu, Wrapper } from '@pages/contact/style';

export default function Contact() {
  const menuList = [
    {
      logo: <FaGithub />,
      name: 'github',
      dec: '프로젝트 코드',
      link: 'https://github.com/larmong',
    },
    {
      logo: <SiTistory />,
      name: 'tistory',
      dec: '개발 기록',
      link: 'https://larmong.tistory.com/',
    },
    {
      logo: <FaFilePdf />,
      name: 'pdf',
      dec: '간단 이력서',
      link: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/history%2Flarmong.pdf?alt=media&token=e97d431c-ba4b-4971-aa7c-b218f9b90526',
    },
  ];

  const handleMoveToLink = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <Wrapper>
      <div className="container">
        {menuList.map((menu, idx: number) => (
          <Menu key={`${menu}_${idx}`}>
            <IconBox className={menu.name === 'tistory' ? 't-size' : menu.name === 'pdf' ? 'p-size' : ''}>
              {menu.logo}
            </IconBox>
            <ContDec>
              <p>{menu.name}</p>
              <span>{menu.dec}</span>
            </ContDec>
            <LinkBtn
              onClick={() => {
                handleMoveToLink(`${menu.link}`);
              }}
            ></LinkBtn>
          </Menu>
        ))}
      </div>
    </Wrapper>
  );
}

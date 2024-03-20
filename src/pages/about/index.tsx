import { useState } from 'react';

import { Contents, TabContents, Wrapper } from '@pages/about/style';
import Title from '@components/title';
import Tab from '@components/tab';

export default function About() {
  const [overViewSrc, setOverViewSrc] = useState<string>('');
  const [tabTitle, setTabTitle] = useState<string>('Me');
  const lists = [
    {
      title: 'Me',
      cont: 'Welcome to my portfolio. Discover more in the intro!',
    },
    {
      title: 'Today',
      cont: 'Let me introduce myself. Sharing my journey, skills, and experiences.',
    },
    {
      title: 'Future',
      cont: 'I offer pages with my dev history and downloadable PDF portfolios.',
    },
  ];

  const handleMouseHover = (name?: string) => () => {
    if (!name) {
      setOverViewSrc('');
      return;
    }
    setOverViewSrc(name);
  };

  return (
    <Wrapper>
      <div className="container">
        <Title name="about" num="02" />
        <Contents>
          <Tab tabTitle={tabTitle} setTabTitle={setTabTitle} lists={lists} />
          <TabContents>
            <div className="text-wrapper" style={{ display: `${tabTitle === 'Me' ? 'flex' : 'none'}` }}>
              <span>
                <em>
                  <i onMouseEnter={handleMouseHover('me-01')} onMouseLeave={handleMouseHover()}>
                    새로운 아이디어를 코드로 구현
                  </i>
                </em>
                하는 과정을 즐기며, 사용자 경험을 개선하고 멋진 인터페이스를 구축 하는 일에 큰 흥미를 가지고 있습니다.
                끊임없이 발전하는 기술 동향을 따라가며 배우는 것을 좋아하며,{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('me-02')} onMouseLeave={handleMouseHover()}>
                    코드를 작성할때 가독성과 유지보수
                  </i>
                </em>
                를 고려한 코드를 작성하는것에 집중합니다.
              </span>
              <span>
                포트폴리오에는 저의{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('me-03')} onMouseLeave={handleMouseHover()}>
                    프론트엔드 개발자로서의 성장 과정
                  </i>
                </em>
                을 확인하실 수 있도록 다양한 사이드 프로젝트들을 담았습니다. 최근에는 문제 해결 과정을 Readme를 통해
                확인 할 수 있도록 정리하며 진행하고있습니다.
              </span>
              <span>포트폴리오를 통해 저에 대해 더 자세히 알아가시면 좋을 것 같습니다. 감사합니다:) ☺️</span>
            </div>
            <div className="text-wrapper" style={{ display: `${tabTitle === 'Today' ? 'flex' : 'none'}` }}>
              <span>
                처음은{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('today-01')} onMouseLeave={handleMouseHover()}>
                    웹디자이너로서 시작
                  </i>
                </em>
                하여 웹디자인과 사용자 경험에 대한 깊은 흥미를 느꼈습니다. 그리고 웹퍼블리셔 로 발전하며 디자인이 웹
                환경에서 어떻게 구현되는지에 대한 이해를 확장하였습니다. 이러한 과정에서 웹 기술에 대한 열정이 자라나며,{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('today-02')} onMouseLeave={handleMouseHover()}>
                    프론트엔드 개발
                  </i>
                </em>
                의 세계에 더욱 빠져들게 되었습니다.
              </span>
              <span>
                이전의 경험들이 프론트엔드 개발로의 발전을 향한 중요한 발판이었습니다. 프론트엔드 개발자로서의 길은
                처음부터 완벽하지 않았지만, 저의 열정과 호기심은 항상 제게 원동력을 제공하였습니다. 그 결과, 기존의
                디자인 스킬과 퍼블리싱 경험이 개발 역량을 높이는데 큰 도움이 되었습니다.
              </span>
              <span>
                또한, 개발자로서의 짧다면 짧은 기간이지만 더 나은 개발자로 성장하기 위해 지속적으로 노력하고 있습니다.
                새로운 프로그래밍 언어와{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('today-03')} onMouseLeave={handleMouseHover()}>
                    기술을 익히며 사이드 프로젝트에 도전
                  </i>
                </em>
                하고, 문제를 해결하는 과정에서 끊임없이 발전하고 있습니다.
              </span>
            </div>
            <div className="text-wrapper" style={{ display: `${tabTitle === 'Future' ? 'flex' : 'none'}` }}>
              <span>
                프론트엔드{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('future-01')} onMouseLeave={handleMouseHover()}>
                    개발자로서의 경험이 쌓일수록
                  </i>
                </em>{' '}
                기술을 배우는 것뿐만 아니라 그 기술을 깊게 이해하고 응용하는 것이 중요함을 깨달았습니다. JavaScript,
                TypeScript, React.js, Next.js와 같은 기술들은 물론 중요하지만, 이러한 기술들을 단순히 습득하는 것보다는
                그 기반에 깔린 원리와 동작 메커니즘을 깊게 파고들어야 한다는 것이 중요하다는 것을 깨달았습니다.
              </span>
              <span>
                기술을 깊게 이해하고 응용하는 것은 단순히 현재의 문제를 해결하는 데에만 도움을 주는 것이 아니라, 아직
                일어나지 않은 문제를 대비하는 데에도 큰 도움이 됩니다. 또한 문제가 생겼을 때 단순히 문제를 해결하는것
                뿐만 아니라{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('future-02')} onMouseLeave={handleMouseHover()}>
                    어떻게, 왜? 해결
                  </i>
                </em>
                되었는지에도 집중해보려고합니다.
              </span>
              <span>
                포트폴리오를 통해 저의 지속적인 역량 강화와{' '}
                <em>
                  <i onMouseEnter={handleMouseHover('future-03')} onMouseLeave={handleMouseHover()}>
                    끊임없는 성장에 대한 열정
                  </i>
                </em>
                을 확인해주세요!
              </span>
            </div>
            <div className="img-wrapper">
              <p>Overview</p>
              <div className="img">
                {overViewSrc !== '' ? (
                  <img src={`${process.env.PUBLIC_URL}/assets/images/${overViewSrc}.gif`} alt="" />
                ) : (
                  ''
                )}
              </div>
            </div>
          </TabContents>
        </Contents>
      </div>
    </Wrapper>
  );
}

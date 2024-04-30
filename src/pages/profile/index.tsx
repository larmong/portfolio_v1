import {
  Hand,
  List,
  TopCont,
  ProfileCont,
  ProfileWrapper,
  Stacks,
  StacksContainer,
  StacksWrapper,
  Title,
  Wrapper,
  HistoryCont,
  History,
} from '@pages/profile/style';
import { BsCheck2Square, BsCodeSlash } from 'react-icons/bs';
import { PiCertificateBold } from 'react-icons/pi';
import { MdHistory, MdSchool } from 'react-icons/md';

export default function Profile() {
  const handleMoveToLink = (url: string) => () => {
    window.open(`${url}`, '_blank');
  };

  return (
    <Wrapper>
      <div className="container">
        <TopCont>
          <Title>
            <Hand>
              <div className="wave" role="img" aria-label="Waving hand">
                👋
              </div>
            </Hand>
            끊임없는 도전을 하는<span>FRONT-END</span>"이아름" 입니다!
          </Title>
          <List>
            <li>
              <BsCheck2Square />
              꾸준함의 진짜 가치를 알기에 조그마한 프로젝트라도 도전하고 실행합니다.
            </li>
            <li>
              <BsCheck2Square />
              당장은 풀지 못하는 문제가 생기더라도 포기하지 않고 결국 해냈을 때의 가치를 알고있습니다.
            </li>
            <li>
              <BsCheck2Square />
              요즘은 새로운 스킬을 배우는 것도 중요하지만 하나의 스킬을 어떻게 더 효율적으로
              <br />
              사용 할 수 있을지 고민하는 것에 더 시간을 투자하고 있습니다.
            </li>
          </List>
        </TopCont>
        <HistoryCont>
          <History>
            <div className="history-head">
              <span>2023.09 ~ ing</span>
              <p>아이엠폼</p>
            </div>
            <ul className="history-body">
              <li>
                <div className="history-img link" onClick={handleMoveToLink('https://www.archery.or.kr')}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/history%2Farchery.png?alt=media&token=fd18ce7f-7a8b-4a7e-b4e3-f64560ab038b"
                    alt="대한양궁협회 썸네일"
                  />
                </div>
                <span>
                  <em>◆ 대한양궁협회 클라이언트(PC, MOBILE) 웹사이트</em>
                  <em>◆ 대한양궁협회 어드민 웹사이트</em>
                  <i>
                    React.js를 사용하여 대한양궁협회의 클라이언트, 어드민 웹사이트 2차 개발 및 유지보수를
                    담당하였습니다.
                    <br className="display-pc" />
                    Redux Toolkit, Recoil, styled-components를 사용한 프로젝트입니다.
                  </i>
                </span>
              </li>
              <li>
                <div className="history-img link" onClick={handleMoveToLink('https://www.hyundai.com/jp/ioniq5n')}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/history%2Fhyundai.png?alt=media&token=c2b4db5d-4b0b-4be8-a3bd-10ec59d4d9cb"
                    alt="현대 재팬 썸네일"
                  />
                </div>
                <span>
                  <em>◆ 현대 JAPAN 이노션 웹페이지</em>
                  <i>
                    javascript를 이용한 스태틱 페이지와 모션이 많은 차량 이벤트 페이지 등 제작을 담당하였습니다.
                    <br className="display-pc" />
                    javascript와 gsap 라이브러리 등 다양한 라이브러리를 사용하여 인터랙티브 웹을 만들어 볼 수 있는
                    프로젝트였고 공통 컴포넌트와 구조에 대해 고민해 볼 수 있는 프로젝트였습니다.
                  </i>
                </span>
              </li>
              <li>
                <div className="history-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/history%2Fsavezone.png?alt=media&token=4b40c1a5-c21b-4e64-83d7-f1c5b7679454"
                    alt="세이브존 이벤트 썸네일"
                  />
                </div>
                <span>
                  <em>◆ 세이브존 / 롯데백화점 / 한화손해보험 이벤트</em>
                  <i>
                    javascript를 이용하여 운세 이벤트, 행운의 편지, 로또 이벤트 등 다양한 미니 게임 이벤트 페이지를
                    제작하였습니다.
                    <br className="display-pc" />
                    실제 사용자가 이벤트를 참여하는 과정을 실시간으로 확인할 수 있었고, 백엔드와 소통하며 다양한 API를
                    활용하여 로직을 만들고, QA를 통해 다양한 이슈를 해결해 볼 수 있는 프로젝트였습니다.
                  </i>
                </span>
              </li>
              <li>
                <span style={{ width: '100%' }}>
                  <i>
                    그 외, 까사미아 홈페이지 유지보수, 롯데면세점 매거진 발행, 현대캐피탈 영업 카탈로그, 세이브존 어드민
                    등 javascript, react 프로젝트의 유지보수를 담당하였습니다.
                  </i>
                </span>
              </li>
            </ul>
          </History>
          <History>
            <div className="history-head">
              <span>2022.04 ~ 2022.12</span>
              <p>찌읏</p>
            </div>
            <ul className="history-body">
              <li>
                <div className="history-img link" onClick={handleMoveToLink('https://tounou.co.kr/')}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/history%2Ftounou.png?alt=media&token=bd0d2f72-c168-4b94-8f8a-18eff32f77fa"
                    alt="뚜누 썸네일"
                  />
                </div>
                <span>
                  <em>◆ 뚜누 클라이언트 웹사이트</em>
                  <i>Vue.js 를 활용한 온라인 쇼핑몰 페이지의 컴포넌트를 제작하고 퍼블리싱을 담당하였습니다.</i>
                </span>
              </li>
              <li>
                <span style={{ width: '100%' }}>
                  <i>그 외, vue와 javascript를 이용한 웹사이트 퍼블리싱과 어드민 홈페이지 제작을 담당하였습니다.</i>
                </span>
              </li>
            </ul>
          </History>
          <History>
            <div className="history-head">
              <span>2022.02 ~ 2022.05</span>
              <p>히포케이메논</p>
            </div>
            <ul className="history-body">
              <li>
                <div className="history-img link" onClick={handleMoveToLink('http://www.wealthyinvestment.co.kr/')}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/history%2Fwealthy.png?alt=media&token=19e9ca0e-3ff0-4495-aff7-1809c7e38afe"
                    alt="웰시투자그룹 썸네일"
                  />
                </div>
                <span>
                  <em>◆ 웰시투자그룹 홈페이지</em>
                  <i>javascript를 사용한 웹 페이지의 디자인, 퍼블리싱을 담당하였습니다.</i>
                </span>
              </li>
            </ul>
          </History>
        </HistoryCont>
      </div>
    </Wrapper>
  );
}

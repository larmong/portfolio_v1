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
              <em>프론트엔드</em>
            </div>
            <ul className="history-body">
              <li>
                <div className="history-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/projects%2Fweb%2Fproject_1.png?alt=media&token=8bf08d39-e84c-4d2d-bb58-13f44379efa2"
                    alt=""
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
                <div className="history-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/projects%2Fweb%2Fproject_1.png?alt=media&token=8bf08d39-e84c-4d2d-bb58-13f44379efa2"
                    alt=""
                  />
                </div>
                <span>
                  <em>◆ 현대 JAPAN 이노션</em>
                  <i>
                    javascript를 이용한 스태틱 페이지와 모션이 많은 차량 이벤트 페이지 제작을 담당하였습니다.
                    <br className="display-pc" />
                    javascript와 gsap 라이브러리 등 다양한 라이브러리를 사용하여 인터랙티브 웹을 만들어 볼 수 있는
                    프로젝트였습니다.
                  </i>
                </span>
              </li>
              <li>
                <div className="history-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/projects%2Fweb%2Fproject_1.png?alt=media&token=8bf08d39-e84c-4d2d-bb58-13f44379efa2"
                    alt=""
                  />
                </div>
                <span>
                  <em>◆ 세이브존 / 롯데백화점 이벤트</em>
                  <i>
                    javascript를 이용하여 운세 이벤트, 행운의 편지, 로또 이벤트 등 다양한 미니 게임 이벤트 페이지를
                    제작하였습니다.
                    <br className="display-pc" />
                    실제 사용자가 이벤트를 참여하는 과정을 실시간으로 확인할 수 있었고, 백엔드와 소통하며 다양한 API를
                    활용하여 로직을 만들고, QA를 통해 다양한 이슈를 해결하였습니다.
                  </i>
                </span>
              </li>
            </ul>
          </History>
          <History>
            <div className="history-head">
              <span>2022.04 ~ 2022.12</span>
              <p>찌읏</p>
              <em>프론트엔드</em>
            </div>
            <ul className="history-body">
              <li>
                <div className="history-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/projects%2Fweb%2Fproject_1.png?alt=media&token=8bf08d39-e84c-4d2d-bb58-13f44379efa2"
                    alt=""
                  />
                </div>
                <span>
                  <em>◆ 뚜누 홈페이지</em>
                  <i>Vue.js 를 활용한 온라인 쇼핑몰페이지 제작을 담당하였습니다.</i>
                </span>
              </li>
              <li>
                <div className="history-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/projects%2Fweb%2Fproject_1.png?alt=media&token=8bf08d39-e84c-4d2d-bb58-13f44379efa2"
                    alt=""
                  />
                </div>
                <span>
                  <em>◆ 뭐시기 어드민페이지</em>
                  <i>jquery, javascript를 활용한 어드민페이지를 제작하였습니다.</i>
                </span>
              </li>
            </ul>
          </History>
          <History>
            <div className="history-head">
              <span>2022.02 ~ 2022.05</span>
              <p>히포케이메논</p>
              <em>웹퍼블리싱 및 웹디자인</em>
            </div>
            <ul className="history-body">
              <li>
                <div className="history-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-c1747.appspot.com/o/projects%2Fweb%2Fproject_1.png?alt=media&token=8bf08d39-e84c-4d2d-bb58-13f44379efa2"
                    alt=""
                  />
                </div>
                <span>
                  <em>◆ 웰시투자그룹 홈페이지</em>
                  <i>Jquery, javascript를 사용한 웹 페이지의 기획, 디자인, 퍼블리싱을 담당하였습니다.</i>
                </span>
              </li>
            </ul>
          </History>
          <History>
            <div className="history-head">
              <span>2018.06 ~ 2020.05</span>
              <p>동아피엠에스</p>
              <em>웹디자인 및 사무</em>
            </div>
            <ul className="history-body"></ul>
          </History>
        </HistoryCont>
        {/*<ProfileWrapper>*/}
        {/*  <ProfileCont>*/}
        {/*    <h5>*/}
        {/*      <MdHistory />*/}
        {/*      history*/}
        {/*    </h5>*/}
        {/*    <ul>*/}
        {/*      <li>*/}
        {/*        <span>2023.09 ~ ing</span>*/}
        {/*        <em>아이엠폼</em>프론트엔드*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span>2022.04 ~ 2022.12</span>*/}
        {/*        <em>찌읏</em>프론트엔드*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span>2022.02 ~ 2022.05</span>*/}
        {/*        <em>히포케이메논</em>웹퍼블리싱 및 웹디자인*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span>2018.06 ~ 2020.05</span>*/}
        {/*        <em>동아피엠에스</em>웹디자인 및 사무*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </ProfileCont>*/}
        {/*  <ProfileCont>*/}
        {/*    <h5>*/}
        {/*      <MdSchool />*/}
        {/*      education*/}
        {/*    </h5>*/}
        {/*    <ul>*/}
        {/*      <li>*/}
        {/*        <span>2023.03 ~ ing</span>방송통신대학교 컴퓨터과학과 편입*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span>2023.02 ~ 2023.05</span>코드캠프 고농축 프론트엔드 코스*/}
        {/*        [인프런X코드캠프]*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span>2020.06 ~ 2020.11</span>웹표준 기반 UIUX 엔지니어링*/}
        {/*        [더조은아카데미]*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </ProfileCont>*/}
        {/*  <ProfileCont>*/}
        {/*    <h5>*/}
        {/*      <PiCertificateBold />*/}
        {/*      certificate*/}
        {/*    </h5>*/}
        {/*    <ul>*/}
        {/*      <li>*/}
        {/*        <span>2020.12.10</span>*/}
        {/*        웹디자인 기능사*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <span>2020.10.15</span>GTQ 1급*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </ProfileCont>*/}
        {/*</ProfileWrapper>*/}
        {/*<StacksWrapper>*/}
        {/*  <h5>*/}
        {/*    <BsCodeSlash />*/}
        {/*    stacks*/}
        {/*  </h5>*/}
        {/*  <StacksContainer>*/}
        {/*    <Stacks>*/}
        {/*      <h6>디자인</h6>*/}
        {/*      <ul>*/}
        {/*        <li>Photoshop</li>*/}
        {/*        <li>Illustrator</li>*/}
        {/*        <li>Figma</li>*/}
        {/*        <li>Adobe XD</li>*/}
        {/*      </ul>*/}
        {/*    </Stacks>*/}
        {/*    <Stacks>*/}
        {/*      <h6>퍼블리싱</h6>*/}
        {/*      <ul>*/}
        {/*        <li>HTML5</li>*/}
        {/*        <li>CSS3</li>*/}
        {/*        <li>SCSS</li>*/}
        {/*        <li>JavaScript</li>*/}
        {/*        <li>Jquery</li>*/}
        {/*      </ul>*/}
        {/*    </Stacks>*/}
        {/*    <Stacks>*/}
        {/*      <h6>프론트엔드</h6>*/}
        {/*      <ul>*/}
        {/*        <li>Emotion</li>*/}
        {/*        <li>Styled-Components</li>*/}
        {/*        <li>TypeScript</li>*/}
        {/*        <li>ReactJs</li>*/}
        {/*        <li>NextJs</li>*/}
        {/*        <li>VueJs</li>*/}
        {/*      </ul>*/}
        {/*    </Stacks>*/}
        {/*    <Stacks>*/}
        {/*      <h6>협업 & 툴</h6>*/}
        {/*      <ul>*/}
        {/*        <li>Github</li>*/}
        {/*        <li>Bitbuket</li>*/}
        {/*        <li>Sourcetree</li>*/}
        {/*        <li>Slack</li>*/}
        {/*      </ul>*/}
        {/*    </Stacks>*/}
        {/*  </StacksContainer>*/}
        {/*</StacksWrapper>*/}
      </div>
    </Wrapper>
  );
}

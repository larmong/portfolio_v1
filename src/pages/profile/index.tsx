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
} from "@pages/profile/style";
import { BsCheck2Square, BsCodeSlash } from "react-icons/bs";
import { PiCertificateBold } from "react-icons/pi";
import { MdHistory, MdSchool } from "react-icons/md";

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
              꾸준함의 진짜 가치를 알기에 조그마한 프로젝트라도 도전하고
              실행합니다.
            </li>
            <li>
              <BsCheck2Square />
              당장은 풀지 못하는 문제가 생기더라도 포기하지 않고 결국 해냈을
              때의 가치를 알고있습니다.
            </li>
            <li>
              <BsCheck2Square />
              요즘은 새로운 스킬을 배우는 것도 중요하지만 하나의 스킬을 어떻게
              더 효율적으로
              <br />
              사용 할 수 있을지 고민하는 것에 더 시간을 투자하고 있습니다.
            </li>
          </List>
        </TopCont>
        <ProfileWrapper>
          <ProfileCont>
            <h5>
              <MdHistory />
              history
            </h5>
            <ul>
              <li>
                <span>2023.09 ~ ing</span>
                <em>아이엠폼</em>프론트엔드
              </li>
              <li>
                <span>2022.04 ~ 2022.12</span>
                <em>찌읏</em>프론트엔드
              </li>
              <li>
                <span>2022.02 ~ 2022.05</span>
                <em>히포케이메논</em>웹퍼블리싱 및 웹디자인
              </li>
              <li>
                <span>2018.06 ~ 2020.05</span>
                <em>동아피엠에스</em>웹디자인 및 사무
              </li>
            </ul>
          </ProfileCont>
          <ProfileCont>
            <h5>
              <MdSchool />
              education
            </h5>
            <ul>
              <li>
                <span>2023.03 ~ ing</span>방송통신대학교 컴퓨터과학과 편입
              </li>
              <li>
                <span>2023.02 ~ 2023.05</span>코드캠프 고농축 프론트엔드 코스
                [인프런X코드캠프]
              </li>
              <li>
                <span>2020.06 ~ 2020.11</span>웹표준 기반 UIUX 엔지니어링
                [더조은아카데미]
              </li>
            </ul>
          </ProfileCont>
          <ProfileCont>
            <h5>
              <PiCertificateBold />
              certificate
            </h5>
            <ul>
              <li>
                <span>2020.12.10</span>
                웹디자인 기능사
              </li>
              <li>
                <span>2020.10.15</span>GTQ 1급
              </li>
            </ul>
          </ProfileCont>
        </ProfileWrapper>
        <StacksWrapper>
          <h5>
            <BsCodeSlash />
            stacks
          </h5>
          <StacksContainer>
            <Stacks>
              <h6>디자인</h6>
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Figma</li>
                <li>Adobe XD</li>
              </ul>
            </Stacks>
            <Stacks>
              <h6>퍼블리싱</h6>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>Jquery</li>
              </ul>
            </Stacks>
            <Stacks>
              <h6>프론트엔드</h6>
              <ul>
                <li>Emotion</li>
                <li>Styled-Components</li>
                <li>TypeScript</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>VueJs</li>
              </ul>
            </Stacks>
            <Stacks>
              <h6>협업 & 툴</h6>
              <ul>
                <li>Github</li>
                <li>Bitbuket</li>
                <li>Sourcetree</li>
                <li>Slack</li>
              </ul>
            </Stacks>
          </StacksContainer>
        </StacksWrapper>
      </div>
    </Wrapper>
  );
}

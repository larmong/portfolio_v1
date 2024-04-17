import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import styled from "@emotion/styled";
import { useRef } from "react";
import { TbBrandNextjs } from "react-icons/tb";

export const TagWrapper = styled.div`
  position: relative;
  height: 20px;
`;
export const HoverTag = styled.div`
  transition: opacity 0.4s ease;
  opacity: 0;
  position: absolute;
  top: 36px;
  left: 0;
  background: #fff;
  padding: 4px 6px;
  border-radius: 4px;
  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 11px solid #ffffff;
    border-left: 8px solid transparent;
    border-right: 10px solid transparent;
  }
`;

const TagIcon = ({ tag }: { tag: string }) => {
  const useHover = useRef<HTMLDivElement | null>(null);
  const onMouseHover = (type: string) => () => {
    if (useHover.current) {
      if (type === "enter") {
        useHover.current.style.setProperty("opacity", "1");
      } else {
        useHover.current.style.setProperty("opacity", "0");
      }
    }
  };

  switch (tag) {
    case "javascript":
      return (
        <TagWrapper>
          <SiJavascript
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              width: "18px",
              height: "18px",
              color: "#ffd710",
            }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "typescript":
      return (
        <TagWrapper>
          <SiTypescript
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              width: "18px",
              height: "18px",
              color: "#4d7bc2",
            }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "react":
      return (
        <TagWrapper>
          <SiReact
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ width: "20px", height: "20px", color: "rgb(0 206 255)" }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "vue":
      return (
        <TagWrapper>
          <FaVuejs
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ width: "20px", height: "20px", color: "rgb(32,162,126)" }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "emotion":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ width: "20px", height: "20px", color: "rgb(32,162,126)" }}
            src="https://emotion.sh/logo-48x48.png"
            alt="Emotion"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "styled-components":
      return (
        <TagWrapper>
          <span
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              display: "block",
              width: "32px",
              height: "20px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "auto",
                height: "20px",
                color: "rgb(32,162,126)",
              }}
              src="https://styled-components.com/nav-logo.png"
              alt="styled-components"
            />
          </span>
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "figma":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ height: "20px", color: "rgb(32,162,126)" }}
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
            alt="Figma"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "html":
      return (
        <TagWrapper>
          <SiHtml5
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ width: "20px", height: "20px", color: "rgb(255,98,0)" }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "css":
      return (
        <TagWrapper>
          <SiCss3
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ width: "20px", height: "20px", color: "rgb(103,141,241)" }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "nextjs":
      return (
        <TagWrapper>
          <TbBrandNextjs
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ width: "22px", height: "22px", color: "rgb(255,255,255)" }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "firebase":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ height: "20px", color: "rgb(32,162,126)" }}
            src="https://www.gstatic.com/devrel-devsite/prod/v66c4dc9b65fea2172a0927d7be81b5b5d946ea60fc02578dd7c264b2c2852152/firebase/images/touchicon-180.png"
            alt="firebase"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "mongodb":
      return (
        <TagWrapper>
          <span
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              display: "block",
              width: "54px",
              height: "20px",
              overflow: "hidden",
              paddingTop: "2px",
            }}
          >
            <img
              style={{
                width: "auto",
                height: "15px",
                color: "rgb(32,162,126)",
              }}
              src="https://umangsoftware.com/wp-content/uploads/2020/05/MongoDB-logo.png"
              alt="mongodb"
            />
          </span>
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "graphql":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ height: "20px", color: "rgb(32,162,126)" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"
            alt="graphql"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "photoshop":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              height: "22px",
              color: "rgb(32,162,126)",
              border: "1px solid rgb(255 255 255 / 10%)",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png"
            alt="photoshop"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "illustrator":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              height: "22px",
              color: "rgb(32,162,126)",
              border: "1px solid rgb(255 255 255 / 10%)",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png"
            alt="illustrator"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "adobexd":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              height: "22px",
              color: "rgb(32,162,126)",
              border: "1px solid rgb(255 255 255 / 10%)",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png"
            alt="adobexd"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "github":
      return (
        <TagWrapper>
          <SiGithub
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{ width: "20px", height: "20px", color: "rgb(255,255,255)" }}
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "netlify":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              height: "22px",
            }}
            src="https://static-00.iconduck.com/assets.00/netlify-icon-2048x2048-xurlvzbi.png"
            alt="netlify"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    case "aws":
      return (
        <TagWrapper>
          <img
            onMouseEnter={onMouseHover("enter")}
            onMouseLeave={onMouseHover("leave")}
            style={{
              height: "22px",
              border: "1px solid rgb(255 255 255 / 20%)",
            }}
            src="https://pbs.twimg.com/profile_images/1351702967561252865/aXfcETIt_400x400.jpg"
            alt="aws"
          />
          <HoverTag ref={useHover}>{tag.toUpperCase()}</HoverTag>
        </TagWrapper>
      );
    default:
      return "";
  }
};

export default TagIcon;

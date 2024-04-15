import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import styled from "@emotion/styled";
import { useRef } from "react";

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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
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
          <HoverTag ref={useHover}>{tag}</HoverTag>
        </TagWrapper>
      );
    default:
      return "";
  }
};

export default TagIcon;

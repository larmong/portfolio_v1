import { ReactElement } from "react";
import { Outlet } from "react-router";
import { SiTistory } from "react-icons/si";
import { FaFilePdf, FaGithub } from "react-icons/fa";

import { Page, Wrapper } from "@commons/layout/style";
import Header from "@components/layout/header";

export default function Layout({ children }: IPropsLayout) {
  const footerIcon = [
    {
      title: "github",
      icon: <FaGithub />,
      url: "https://github.com/larmong",
    },
    {
      title: "tistory",
      icon: <SiTistory />,
      url: "https://larmong.tistory.com/",
    },
    {
      title: "pdf",
      icon: <FaFilePdf />,
      url: "",
    },
  ];

  const handleMoveToLink = (url: string) => () => {
    window.open(`${url}`, "_blank");
  };

  return (
    <Wrapper>
      <Header />
      <Page>
        <section>{children || <Outlet />}</section>
        <footer>
          <ul className="footer-contact display-m">
            {footerIcon.map((el, idx: number) => (
              <li
                key={`${el.title}_${idx}`}
                className={el.title}
                onClick={handleMoveToLink(el.url)}
              >
                {el.icon}
              </li>
            ))}
          </ul>
          <span>copyright ⓒ 2024 All rights reserved by larmong.</span>
        </footer>
      </Page>
    </Wrapper>
  );
}

interface IPropsLayout {
  children?: ReactElement;
}

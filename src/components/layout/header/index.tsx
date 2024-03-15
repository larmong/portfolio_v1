import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import gsap from 'gsap';

import { Gnb, Wrapper } from '@components/layout/header/style';

export default function Header() {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menus: string[] = ['intro', 'about', 'skill', 'project', 'contact'];

  useEffect(() => {
    const ani = gsap.timeline();
    ani.fromTo(
      headerRef.current,
      {
        y: -50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
      },
      0
    );
  }, []);

  return (
    <Wrapper ref={headerRef}>
      <div className="container">
        <h1>
          <img
            onClick={() => {
              navigate('/');
            }}
            src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
            alt=""
          />
        </h1>
        <Gnb>
          {menus.map((menu: string) => (
            <li
              key={menu}
              className={pathname.split('/')[1] === menu || (pathname === '/' && menu === 'intro') ? 'active' : ''}
              onClick={() => {
                navigate(`${menu === 'intro' ? '/' : menu}`);
              }}
            >
              {menu}
            </li>
          ))}
        </Gnb>
      </div>
    </Wrapper>
  );
}

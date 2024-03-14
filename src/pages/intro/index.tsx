import {useEffect, useRef} from "react";
import gsap from "gsap";

import {IntroCont, Wrapper} from '@pages/intro/style';

export default function Intro() {
    const imageRef = useRef<any>(null);
    const introRef = useRef<any>(null);
    const dscRef = useRef<any>(null);
    const titleRef = useRef<any>(null);

    useEffect(() => {
        const ani = gsap.timeline();
        ani.fromTo(imageRef.current,
            {
                x: -100,
                autoAlpha: 0,
            },
            {
                x: 0,
                autoAlpha: 1,
                duration: 1,
            }, 0.2
        ).fromTo(introRef.current,
            {
                x: 100,
                autoAlpha: 0,
            },
            {
                x: 0,
                autoAlpha: 1,
                duration: 1,
                onComplete: () => {
                    const titles = gsap.utils.toArray(titleRef.current?.children) as HTMLElement[];
                    const texts = gsap.utils.toArray(dscRef.current?.children) as HTMLElement[];

                    titles?.forEach((title, idx) => {
                        gsap.fromTo(title,
                            {
                                x: idx === 0 ? 300 : -300,
                                autoAlpha: 0,
                            },
                            {
                                delay: 0.2 * idx,
                                duration: 0.8,
                                x: 0,
                                autoAlpha: 1,
                            }
                        )
                    })
                    texts?.forEach((text, idx) => {
                        gsap.fromTo(text,
                            {
                                y: 50,
                                autoAlpha: 0,
                            },
                            {
                                delay: 0.6 + 0.2 * idx,
                                duration: 0.8,
                                y: 0,
                                autoAlpha: 1,
                            }
                        )
                    })
                }
            }, 0.6
        )
    }, [])

    return <Wrapper>
        <div className="container">
            <IntroCont>
                <div className="left" ref={imageRef}></div>
                <div className="right" ref={introRef}>
                    <div className="intro-title">
                        <span>Intro</span>
                        <span># 01</span>
                    </div>
                    <div className="intro-link">
                        <div>
                            <span>javascript</span>
                            <span>react</span>
                            <span>vue</span>
                        </div>
                        <div>
                            <span>web frontend</span>
                            <span>web publishing</span>
                        </div>
                    </div>
                    <div ref={titleRef} className="intro-name">
                        <p>larmong</p>
                        <p>folio.</p>
                    </div>
                    <div ref={dscRef} className="intro-dsc">
                        <span>안녕하세요😊 :)</span>
                        <span>사용자 중심의 웹을 만들기 위해 노력하는 프론트엔드 이아름입니다.</span>
                        <span>larmong portfolio 2024.ver</span>
                    </div>
                </div>
            </IntroCont>
        </div>
    </Wrapper>;
}

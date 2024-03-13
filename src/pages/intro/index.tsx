import {useEffect, useRef} from "react";
import {IntroCont, Wrapper} from '@pages/intro/style';
import gsap from "gsap";

export default function Intro() {
    const imageRef = useRef(null);
    const introRef = useRef(null);

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
            }, 0.4
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
                    const texts = document.querySelectorAll(".intro-dsc span");
                    console.log(texts)
                    texts.forEach((text, idx) => {
                        gsap.fromTo(text,
                            {
                                y: 30,
                                autoAlpha: 0,
                            },
                            {
                                delay: 0.2 * idx,
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
                    <div className="intro-name"></div>
                    <div className="intro-dsc">
                        <span>안녕하세요😊 :)</span>
                        <span>사용자 중심의 웹을 만들기 위해 노력하는 프론트엔드 이아름입니다.</span>
                        <span>larmong portfolio 2024.ver</span>
                    </div>
                </div>
            </IntroCont>
        </div>
    </Wrapper>;
}

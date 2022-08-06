import React, {useRef, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {useEffectOnce} from "./useEffectOnce";

const ease = window.bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = window.bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = window.bezierEasing(0, 0.7, 1, 0.3);

const th = window.innerHeight;
const bh = th + 1400;
const th2 = bh;
const bh2 = th2 + 1400;
const th3 = bh2;
const bh3 = th3 + 1400;
const th4 = bh3;
const bh4 = th4 + 1400;
const th5 = bh4;
const bh5 = th5 + 1400;


const independentTh =  (th4 + th5)/2;
const independentBh =  (th4 + th5)/2 + 1400;

const def = [
    {
        animation: [
            {
                top: th,
                bottom: bh,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: th,
                bottom: th + 300,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: bh - 300,
                bottom: bh,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
    },
    {
        animation: [
            {
                top: 0,
                bottom: th,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
    },
    {
        animation: [
            {
                top: th2,
                bottom: bh2,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: th2,
                bottom: th2 + 300,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: bh2 - 300,
                bottom: bh2,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
    },
    {
        animation: [
            {
                top: th3,
                bottom: bh3,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: th3,
                bottom: th3 + 300,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: bh3 - 300,
                bottom: bh3,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
    },
    {
        animation: [
            {
                top: th4,
                bottom: bh4,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: th4,
                bottom: th4 + 300,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: bh4 - 300,
                bottom: bh4,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
    },
    {
        animation: [
            {
                top: independentTh,
                bottom: independentBh,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: independentTh,
                bottom: independentTh + 300,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: independentBh - 300,
                bottom: independentBh,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],

    },
    {
        animation: [
            {
                top: th5,
                bottom: bh5,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: th5,
                bottom: th5 + 300,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: bh5 - 300,
                bottom: bh5,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
    },
];
// const targetHeight = 7100;
const targetHeight = window.innerHeight * (def.length+1);
console.log(targetHeight)

const ScrollAnimation = () => {
    const ref = useRef(null);
    const slideContainerRef = useRef(null);

    const [isRendered, setIsRendered] = useState(false);

    const refs = slideContainerRef.current?.children;

    let enabled = new Map();
    let disabled = new Map();

    function isAmong(num, top, bottom) {
        return num >= top && num <= bottom
    };

    function applyStyle(element, styleName, value, unit) {
        if (styleName === "translateY") {
            element.style.transform = `translateY(${value}${unit})`;
            return;
        }
        if (styleName === "translateX") {
            element.style.transform = `translateX(${value}${unit})`;
            return;
        }
        element.style[styleName] = value;

    };

    function onScroll() {
        // 현재 스크롤 위치 파악
        const scrollTop = window.scrollY || window.pageYOffset;
        const currentCenterPosition = scrollTop + window.innerHeight / 2;


        // disabled 순회하며 활성화할 요소 찾기.
        disabled.forEach((obj, refname) => {
            const top = Math.min(...obj.animation.map(animation => animation.top));
            const bottom = Math.max(...obj.animation.map(animation => animation.bottom));

            // 만약 칸에 있다면 해당 요소 활성화
            if (
                isAmong(currentCenterPosition, top, bottom)
            ) {
                enabled.set(refname, obj);
                refs[refname].classList.remove("disabled");
                refs[refname].classList.add("enabled");
                disabled.delete(refname);
            }
        });
        // enabled 순회하면서 헤제할 요소를 체크
        enabled.forEach((obj, refname) => {
            const top = Math.min(...obj.animation.map(animation => animation.top));
            const bottom = Math.max(...obj.animation.map(animation => animation.bottom));

            // 범위 밖에 있다면
            if (!isAmong(currentCenterPosition, top, bottom)) {
                // 리스트에서 삭제하고 disabled로 옮김.
                disabled.set(refname, obj);

                refs[refname].classList.remove("enabled");
                refs[refname].classList.add("disabled");
                enabled.delete(refname);
            }

            // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
            else {
                applyAllAnimation(currentCenterPosition, refname);
            }
        });
    }

    function applyAllAnimation(currentCenterPosition, refname) {
        const animations = def[refname].animation;
        if (!animations) return;
        animations.map(animation => {
            const {top: a_top, bottom: a_bottom, easing, styles} = animation;
            const isIn = isAmong(currentCenterPosition, a_top, a_bottom);
            // 만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enabled 설정
            if (isIn) {
                if (!animation.enabled) animation.enabled = true;
            } else if (!isIn && animation.enabled) {
                if (currentCenterPosition <= a_top) {
                    applyStyles(currentCenterPosition, refname, styles, 0);
                } else if (currentCenterPosition >= a_bottom) {
                    applyStyles(currentCenterPosition, refname, styles, 1);
                }
                animation.enabled = false;
            }

            // 애니메이션이 enabled 라면, 애니메이션 적용.
            if (animation.enabled) {
                const r = easing((currentCenterPosition - a_top) / (a_bottom - a_top));
                applyStyles(currentCenterPosition, refname, styles, r);
            }
        })
    }

    function applyStyles(currentCenterPosition, refname, styles, r, unit = "px") {
        Object.keys(styles).map(style => {
            const {topValue, bottomValue} = styles[style];
            const calc = (bottomValue - topValue) * r + topValue;

            applyStyle(refs[refname], style, calc, unit);
        })
    }

    useEffectOnce(() => {
        if(slideContainerRef.current) {
            setIsRendered(true);
        }
    });

    useEffect(() => {
        if(isRendered) {
            if (ref.current) {
                const target = ref.current;
                target.style.height = `${targetHeight}px`;

                const slideContainer = slideContainerRef.current;
                if(slideContainer) {
                    document.addEventListener('scroll', onScroll);

                    def.map((def, index) => disabled.set(index, def));

                    onScroll();

                    return () => {
                        document.removeEventListener('scroll', onScroll)
                    }
                }
            }
        }
    }, [isRendered]);


    return (
        <Container ref={ref}>
            <Sticky>
                <SlideContainer ref={slideContainerRef}>
                    <Slide>
                        <p>안녕하세요.</p>
                    </Slide>
                    <Slide className="scdown">
                        아래로 스크롤하세요.
                    </Slide>
                    <Slide>
                        <p>반갑습니다.</p>
                    </Slide>
                    <Slide>
                        <p>세번째</p>
                        <p>슬라이드 입니다.</p>
                    </Slide>
                    <Slide>
                        <p>네번째</p>
                        <p>슬라이드 입니다.</p>
                    </Slide>
                    <Slide>
                        따로 노는 배경
                    </Slide>
                    <Slide>
                        <p>마지막</p>
                        <p>슬라이드 입니다.</p>
                    </Slide>

                </SlideContainer>
            </Sticky>
        </Container>
    );
};

const Container = styled.div`
  //position: relative;
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const SlideContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  position: absolute;
  z-index: 0;

  display: none;

  p {
    margin: 0;
    font-size: 45px;
    font-weight: bold;
    line-height: 1.35;
    letter-spacing: -1.5px;
    word-spacing: 1.5px;
    text-align: center;
  }

  &.enabled {
    display: block;
  }


  &.scdown {
    position: absolute;
    padding: 30px 0;
    width: 100%;
    height: 50px;
    text-align: center;
    bottom: 0px;
  }
`;

export default ScrollAnimation;


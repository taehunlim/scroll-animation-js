import React, {useRef, useEffect} from 'react';
import styled from '@emotion/styled';

const ease = window.bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = window.bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = window.bezierEasing(0, 0.7, 1, 0.3);

const def = {
    height: 7100,
    elements: {
        sl1: {
            top: 500,
            bottom: 1900,
            topStyle: {
                opacity: 0,
                translateY: -60
            },
            bottomStyle: {
                opacity: 0,
                translateY: 60
            }
        },
        scdown: {
            top: 0,
            bottom: 1000,
            topStyle: {
                opacity: 1
            },
            bottomStyle: {
                opacity: 0
            }
        },
        sl2: {
            top: 1900,
            bottom: 3200,
            topStyle: {
                opacity: 0,
                translateY: -60
            },
            bottomStyle: {
                opacity: 0,
                translateY: 60
            }
        },
        sl3: {
            top: 3300,
            bottom: 4600,
            topStyle: {
                opacity: 0
            },
            bottomStyle: {
                opacity: 0
            }
        },
        wave: {
            top: 4500,
            bottom: 5900,
            topStyle: {
                opacity: 0,
                translateY: 300
            },
            bottomStyle: {
                opacity: 0,
                translateY: 0
            }
        },
        sl4: {
            top: 4700,
            bottom: 6000,
            topStyle: {
                opacity: 0
            },
            bottomStyle: {
                opacity: 0
            }
        },
        sl5: {
            top: 6100,
            bottom: 9000,
            topStyle: {
                opacity: 0
            },
            bottomStyle: {
                opacity: 0
            }
        }
    },
    animations: {
        sl1: [
            {
                top: 500,
                bottom: 1900,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: 500,
                bottom: 800,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 1400,
                bottom: 1900,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
        scdown: [
            {
                top: 600,
                bottom: 1000,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
        sl2: [
            {
                top: 1900,
                bottom: 3200,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: 1900,
                bottom: 2500,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 2600,
                bottom: 3200,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
        sl3: [
            {
                top: 3300,
                bottom: 4600,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: 3300,
                bottom: 3900,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 4000,
                bottom: 4600,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
        wave: [
            {
                top: 4500,
                bottom: 5300,
                easing: ease,
                styles: {
                    translateY: {
                        topValue: 200,
                        bottomValue: 0
                    },
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 5300,
                bottom: 5900,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
        sl4: [
            {
                top: 4700,
                bottom: 6000,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: 4700,
                bottom: 5300,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 5400,
                bottom: 6000,
                easing: easeIn,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }
        ],
        sl5: [
            {
                top: 6100,
                bottom: 7100,
                easing: midSlow,
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60
                    }
                }
            },
            {
                top: 6100,
                bottom: 6700,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            }
        ]
    }
};


const App = () => {
    const ref = useRef(null);
    const sl1 = useRef(null)
    const scdown = useRef(null);
    const wave = useRef(null);


    const sl2 = useRef(null);
    const sl3 = useRef(null);
    const sl4 = useRef(null);
    const sl5 = useRef(null);

    const refs = {
        sl1,
        sl2,
        sl3,
        sl4,
        scdown,
        wave,
        sl5
    }

    let enabled = new Map();
    let disabled = new Map();

    function isAmong(num, top, bottom){
        return num >= top && num <= bottom
    };

    function applyStyle(element, styleName, value, unit = "px") {
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
        const currentPos = scrollTop + window.innerHeight / 2;

        // disabled 순회하며 활성화할 요소 찾기.
        disabled.forEach((obj, refname) => {
            // 만약 칸에 있다면 해당 요소 활성화
            if (
                isAmong(currentPos, obj.top, obj.bottom)
            ) {
                enabled.set(refname, obj);

                refs[refname].current.classList.remove("disabled");
                refs[refname].current.classList.add("enabled");
                disabled.delete(refname);
            }
        });

        // enabled 순회하면서 헤제할 요소를 체크
        enabled.forEach((obj, refname) => {
            const {top, bottom, topStyle, bottomStyle} = obj;
            // 범위 밖에 있다면
            if (!isAmong(currentPos, top, bottom)) {
                // 위로 나갔다면 시작하는 스타일 적용
                if (currentPos <= top) {
                    Object.keys(topStyle).forEach((styleName) => {
                        applyStyle(refs[refname].current, styleName, topStyle[styleName]);
                    });
                }
                // 아래로 나갔다면 끝나는 스타일적용
                else if (currentPos >= bottom) {
                    Object.keys(bottomStyle).forEach((styleName) => {
                        applyStyle(
                            refs[refname].current,
                            styleName,
                            bottomStyle[styleName]
                        );

                        refs[refname].current.style[styleName] = bottomStyle[styleName];
                    });
                }

                // 리스트에서 삭제하고 disabled로 옮김.
                disabled.set(refname, obj);

                refs[refname].current.classList.remove("enabled");
                refs[refname].current.classList.add("disabled");
                enabled.delete(refname);
            }

            // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
            else {
                applyAllAnimation(currentPos, refname);
            }
        });
    }

    function applyAllAnimation(currentPos, refname) {
        const animations = def.animations[refname];
        if (!animations) return;
        for (const animation of animations) {
            const {top: a_top, bottom: a_bottom, easing, styles} = animation;
            const isIn = isAmong(currentPos, a_top, a_bottom);
            // 만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enabled 설정
            if (isIn) {
                if (!animation.enabled) animation.enabled = true;
            } else if (!isIn && animation.enabled) {
                if (currentPos <= a_top) {
                    applyStyles(currentPos, refname, styles, 0);
                } else if (currentPos >= a_bottom) {
                    applyStyles(currentPos, refname, styles, 1);
                }
                animation.enabled = false;
            }

            // 애니메이션이 enabled 라면, 애니메이션 적용.
            if (animation.enabled) {
                const r = easing((currentPos - a_top) / (a_bottom - a_top));
                applyStyles(currentPos, refname, styles, r);
            }
        }
    }

    function applyStyles(currentPos, refname, styles, r, unit = "px") {
        for (const style of Object.keys(styles)) {
            const {topValue, bottomValue} = styles[style];
            const calc = (bottomValue - topValue) * r + topValue;

            applyStyle(refs[refname].current, style, calc, unit);
        }
    }



    useEffect(() => {
        if (ref.current) {
            window.addEventListener('scroll', onScroll);
            const target = ref.current;
            target.style.height = `${def.height}px`;

            disabled.clear();
            enabled.clear();

            for (const refname of Object.keys(def.elements)) {
                disabled.set(refname, def.elements[refname]);
            }

            // 각 애니메이션을 enabled == false 로 만듬.
            for (const refname of Object.keys(def.animations)) {
                for (const animation of def.animations[refname]) {
                    animation.enabled = false;
                }
            }

            disabled.forEach((obj, refname) => {
                Object.keys(obj.topStyle).forEach((styleName) => {
                    const pushValue = obj.topStyle[styleName];
                    refs[refname].current.style[styleName] = pushValue;
                });
            });



            onScroll();

            return () => {
                window.removeEventListener('scroll', onScroll)
            }
        }
    }, [ref]);


    return (
        <Container ref={ref}>
            <Sticky>
                <SlideContainer>
                    <Slide ref={sl1}>
                        <p>안녕하세요.</p>
                    </Slide>
                    <Slide className="scdown" ref={scdown}>
                        아래로 스크롤하세요.
                    </Slide>
                    <Slide ref={sl2}>
                        <p>반갑습니다.</p>
                    </Slide>
                    <Slide ref={sl3}>
                        <p>세번째</p>
                        <p>슬라이드 입니다.</p>
                    </Slide>
                    <Slide ref={sl4}>
                        <p>네번째</p>
                        <p>슬라이드 입니다.</p>
                    </Slide>
                    <Slide ref={wave}>
                        따로 노는 배경
                    </Slide>
                    <Slide ref={sl5}>
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

export default App;


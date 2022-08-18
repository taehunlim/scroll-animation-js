import React from 'react';
import ScrollAnimation from "./components/ScrollAnimation";

const ease = window.bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = window.bezierEasing(0.38, 0.01, 0.78, 0.13);

const animation = {
    start: 4500,
    end: 5900,
    animation: [
        {
            start: 4500,
            end: 5300,
            easing: ease,
            styles: {
                translateY: {
                    startValue: 200,
                    endValue: 0
                },
                opacity: {
                    startValue: 0,
                    endValue: 1
                }
            }
        },
        {
            start: 5300,
            end: 5900,
            easing: easeIn,
            styles: {
                opacity: {
                    startValue: 1,
                    endValue: 0
                }
            }
        }
    ]
}

const App = () => {
    const {Slide} = ScrollAnimation;
    return (
        <div>
            <ScrollAnimation>
                <Slide className="scdown">
                    아래로 스크롤하세요.
                </Slide>
                <Slide>
                    <p>안녕하세요.</p>
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
                    <p>마지막</p>
                    <p>슬라이드 입니다.</p>
                </Slide>
                <Slide
                    animationOrder={4.5}
                    animation={animation}
                >
                    따로 노는 배경
                </Slide>

            </ScrollAnimation>
        </div>
    );
};

export default App;

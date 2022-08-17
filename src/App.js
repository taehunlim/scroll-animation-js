import React from 'react';
import ScrollAnimation from "./components/ScrollAnimation";

const ease = window.bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = window.bezierEasing(0.38, 0.01, 0.78, 0.13);

const animation = [
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
];

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

import React from 'react';
import ScrollAnimation from "./components/ScrollAnimation";

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
                {/*<Slide classname="dependence">*/}
                {/*    따로 노는 배경*/}
                {/*</Slide>*/}
                <Slide>
                    <p>마지막</p>
                    <p>슬라이드 입니다.</p>
                </Slide>

            </ScrollAnimation>
        </div>
    );
};

export default App;

import React, {useRef, useEffect, useState} from 'react';
import {useEffectOnce} from "./useEffectOnce";
import {defaultAnimation} from "./defaultAnimation";

import styledComponent from "./style";
const { Container, Sticky, SlideContainer, StyledSlide } = styledComponent;

const viewHeight = window.innerHeight;

const ScrollAnimation = ({children}) => {
    const ref = useRef(null);
    const slideContainerRef = useRef(null);

    const [isRendered, setIsRendered] = useState(false);

    const enabled = new Map();
    const disabled = new Map();

    function isAmong(num, top, bottom) {
        return num >= top && num <= bottom
    }

    function applyStyle(element, styleName, value, unit) {
        if (styleName === "translateY") {
            element.style.transform = `translateY(${value}${unit})`;
            return;
        }
        if (styleName === "translateX") {
            element.style.transform = `translateX(${value}${unit})`;
            return;
        }
        return element.style[styleName] = value;
    }

    function onScroll(slides) {
        // 현재 스크롤 위치 파악
        const scrollTop = window.scrollY || window.pageYOffset;
        const currentCenterPosition = scrollTop + viewHeight / 2;

        // disabled 순회하며 활성화할 요소 찾기.
        disabled.forEach((obj, slideIndex) => {
            const top = slideIndex === 6 ? 4500 : viewHeight * slideIndex;
            const bottom = slideIndex === 6 ? 5900 : viewHeight * (slideIndex + 1);

            // 만약 칸에 있다면 해당 요소 활성화
            if (
                isAmong(currentCenterPosition, top, bottom)
            ) {
                enabled.set(slideIndex, obj);
                slides[slideIndex].classList.add("enabled");
                disabled.delete(slideIndex);
            }
        });

        // enabled 순회하면서 헤제할 요소를 체크
        enabled.forEach((obj, slideIndex) => {
            const top = slideIndex === 6 ? 4500 : viewHeight * slideIndex;
            const bottom = slideIndex === 6 ? 5900 : viewHeight * (slideIndex + 1);

            // 범위 밖에 있다면
            if (!isAmong(currentCenterPosition, top, bottom)) {
                // 리스트에서 삭제하고 disabled로 옮김.
                disabled.set(slideIndex, obj);

                slides[slideIndex].classList.remove("enabled");
                enabled.delete(slideIndex);
            }

            // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
            else {
                applyAllAnimation(slides[slideIndex], obj, currentCenterPosition);
            }
        });
    }

    function applyAllAnimation(target, animations, currentCenterPosition) {
        if (!animations) return;
        animations.map((animation, i) => {
            const {top: a_top, bottom: a_bottom, easing, styles} = animation;

            const isIn = isAmong(currentCenterPosition, a_top, a_bottom);
            // 만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enabled 설정
            if (isIn) {
                if (!animation.enabled) animation.enabled = true;
            }

            if (!isIn && animation.enabled) {
                if (currentCenterPosition <= a_top) {
                    applyStyles(target, styles, currentCenterPosition, 0);
                }

                if (currentCenterPosition >= a_bottom) {
                    applyStyles(target, styles, currentCenterPosition, 1);
                }
                animation.enabled = false;
            }

            // 애니메이션이 enabled 라면, 애니메이션 적용.
            if (animation.enabled) {
                const r = easing((currentCenterPosition - a_top) / (a_bottom - a_top));
                applyStyles(target, styles, currentCenterPosition, r);
            }
        })
    }

    function applyStyles(target, styles, currentCenterPosition, r, unit = "px") {
        Object.keys(styles).map(style => {
            const {topValue, bottomValue} = styles[style];
            const calc = (bottomValue - topValue) * r + topValue;

            applyStyle(target, style, calc, unit);
        })
    }

    useEffectOnce(() => {
        if (slideContainerRef.current) {
            setIsRendered(true);
        }
    });

    useEffect(() => {
        if (isRendered) {
            const target = ref.current;
            const slideContainer = slideContainerRef.current;
            const slides = slideContainer.children;
            const slidesLength = slides.length;

            target.style.height = `${viewHeight * (slidesLength + 1)}px`;

            for(const index of Array.from(slides).keys()) {
                const animation = children[index].props.animation;


                const top = viewHeight * (index);
                const bottom = viewHeight * (index + 1);

                const currentAnimation = animation ? animation : defaultAnimation(top, bottom);

                console.log(currentAnimation)
                if(index === 0) {
                    enabled.set(index, currentAnimation);
                    slides[index].classList.add("enabled");
                }
                disabled.set(index, currentAnimation);
            }

            document.addEventListener('scroll', () => onScroll(slides));

            return () => {
                document.removeEventListener('scroll', () => onScroll(slides))
            }
        }
    }, [isRendered]);


    return (
        <Container ref={ref}>
            <Sticky>
                <SlideContainer ref={slideContainerRef}>
                    {children}
                </SlideContainer>
            </Sticky>
        </Container>
    );
};

ScrollAnimation.Slide = StyledSlide;

export default ScrollAnimation;


const ease = window.bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = window.bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = window.bezierEasing(0, 0.7, 1, 0.3);

export function defaultAnimation(top, bottom) {
    return [
        {
            top: top,
            bottom: bottom,
            easing: midSlow,
            styles: {
                translateY: {
                    topValue: 60,
                    bottomValue: -60
                }
            }
        },
        {
            top: top,
            bottom: top + top / 2,
            easing: ease,
            styles: {
                opacity: {
                    topValue: 0,
                    bottomValue: 1
                }
            }
        },
        {
            top: bottom - top / 2,
            bottom: bottom,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                }
            }
        }
    ];
}
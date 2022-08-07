const th = window.innerHeight;
const bh = 2 * th;
const th2 = 2 * th;
const bh2 = 3 * th;
const th3 = 3 * th;
const bh3 = 4 * th;
const th4 = 4 * th;
const bh4 = 5 * th;
const th5 = 5 * th;
const bh5 = 6 * th;


const independentTh = (th4 + th5) / 2;
const independentBh = (th4 + th5) / 2 + 1400;

// const def = [
//     [
//         {
//             top: 0,
//             bottom: th,
//             easing: easeIn,
//             styles: {
//                 opacity: {
//                     topValue: 1,
//                     bottomValue: 0
//                 }
//             }
//         }
//     ],
//     [
//         {
//             top: th,
//             bottom: bh,
//             easing: midSlow,
//             styles: {
//                 translateY: {
//                     topValue: 60,
//                     bottomValue: -60
//                 }
//             }
//         },
//         {
//             top: th,
//             bottom: th + th / 2,
//             easing: ease,
//             styles: {
//                 opacity: {
//                     topValue: 0,
//                     bottomValue: 1
//                 }
//             }
//         },
//         {
//             top: bh - th / 2,
//             bottom: bh,
//             easing: easeIn,
//             styles: {
//                 opacity: {
//                     topValue: 1,
//                     bottomValue: 0
//                 }
//             }
//         }
//     ],
//     [
//         {
//             top: th2,
//             bottom: bh2,
//             easing: midSlow,
//             styles: {
//                 translateY: {
//                     topValue: 60,
//                     bottomValue: -60
//                 }
//             }
//         },
//         {
//             top: th2,
//             bottom: th2 + th / 2,
//             easing: ease,
//             styles: {
//                 opacity: {
//                     topValue: 0,
//                     bottomValue: 1
//                 }
//             }
//         },
//         {
//             top: bh2 - th / 2,
//             bottom: bh2,
//             easing: easeIn,
//             styles: {
//                 opacity: {
//                     topValue: 1,
//                     bottomValue: 0
//                 }
//             }
//         }
//     ],
//     [
//         {
//             top: th3,
//             bottom: bh3,
//             easing: midSlow,
//             styles: {
//                 translateY: {
//                     topValue: 60,
//                     bottomValue: -60
//                 }
//             }
//         },
//         {
//             top: th3,
//             bottom: th3 + th / 2,
//             easing: ease,
//             styles: {
//                 opacity: {
//                     topValue: 0,
//                     bottomValue: 1
//                 }
//             }
//         },
//         {
//             top: bh3 - th / 2,
//             bottom: bh3,
//             easing: easeIn,
//             styles: {
//                 opacity: {
//                     topValue: 1,
//                     bottomValue: 0
//                 }
//             }
//         }
//     ],
//     [
//         {
//             top: th4,
//             bottom: bh4,
//             easing: midSlow,
//             styles: {
//                 translateY: {
//                     topValue: 60,
//                     bottomValue: -60
//                 }
//             }
//         },
//         {
//             top: th4,
//             bottom: th4 + th / 2,
//             easing: ease,
//             styles: {
//                 opacity: {
//                     topValue: 0,
//                     bottomValue: 1
//                 }
//             }
//         },
//         {
//             top: bh4 - th / 2,
//             bottom: bh4,
//             easing: easeIn,
//             styles: {
//                 opacity: {
//                     topValue: 1,
//                     bottomValue: 0
//                 }
//             }
//         }
//     ],
//     // [
//     //     {
//     //         top: independentTh,
//     //         bottom: independentBh,
//     //         easing: midSlow,
//     //         styles: {
//     //             translateY: {
//     //                 topValue: 60,
//     //                 bottomValue: -60
//     //             }
//     //         }
//     //     },
//     //     {
//     //         top: independentTh,
//     //         bottom: independentTh + th / 2,
//     //         easing: ease,
//     //         styles: {
//     //             opacity: {
//     //                 topValue: 0,
//     //                 bottomValue: 1
//     //             }
//     //         }
//     //     },
//     //     {
//     //         top: independentBh - th / 2,
//     //         bottom: independentBh,
//     //         easing: easeIn,
//     //         styles: {
//     //             opacity: {
//     //                 topValue: 1,
//     //                 bottomValue: 0
//     //             }
//     //         }
//     //     }
//     // ],
//     [
//         {
//             top: th5,
//             bottom: bh5,
//             easing: midSlow,
//             styles: {
//                 translateY: {
//                     topValue: 60,
//                     bottomValue: -60
//                 }
//             }
//         },
//         {
//             top: th5,
//             bottom: th5 + th / 2,
//             easing: ease,
//             styles: {
//                 opacity: {
//                     topValue: 0,
//                     bottomValue: 1
//                 }
//             }
//         },
//         {
//             top: bh5 - th / 2,
//             bottom: bh5,
//             easing: easeIn,
//             styles: {
//                 opacity: {
//                     topValue: 1,
//                     bottomValue: 0
//                 }
//             }
//         }
//     ],
// ];

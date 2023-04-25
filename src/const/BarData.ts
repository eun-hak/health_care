// export type BarDataType = {
//   country: string;
//   "hot dog": number;
//   hotdogColor: string;
//   burger: number;
//   burgerColor: string;
//   sandwich: number;
//   sandwichColor: string;
//   kebab: number;
//   kebabColor: string;
//   fries: number;
//   friesColor: string;
//   donut: number;
//   donutColor: string;
// }[];

// export const BarData: BarDataType= [
//   {
//     country: "날짜",
//     "hot dog": 6,
//     hotdogColor: "hsl(100, 70%, 50%)",
//     burger: 56,
//     burgerColor: "hsl(110, 70%, 50%)",
//     sandwich: 183,
//     sandwichColor: "hsl(28, 70%, 50%)",
//     kebab: 20,
//     kebabColor: "hsl(113, 70%, 50%)",
//     fries: 48,
//     friesColor: "hsl(291, 70%, 50%)",
//     donut: 109,
//     donutColor: "hsl(297, 70%, 50%)",
//   },
// ];

export type BarDataType = {
  country: string;
  [key: string]: number | string;
};

export const BarData: BarDataType[] = [
  {
    country: "",
    골격근량: 43,
    burgerColor: "hsl(110, 70%, 50%)",
    몸무게: 83,
    sandwichColor: "hsl(28, 70%, 50%)",
    체지방량: 14,
    donutColor: "hsl(297, 70%, 50%)",
  },
];

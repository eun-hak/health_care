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

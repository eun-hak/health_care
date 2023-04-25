export type ChartDataType = {
  id: string;
  color: string;
  data: {
    x: string;
    y: number;
  }[];
};

// 새로고침을 하는 순간 리렌더링되어서 기존 값이 초기화 됨
export const ChartData: ChartDataType[] = [
  {
    id: "몸무게",
    color: "hsl(161, 70%, 50%)",
    data: [],
  },
  {
    id: "체지방률",
    color: "hsl(299, 70%, 50%)",
    data: [],
  },
  {
    id: "골격근량",
    color: "hsl(45, 70%, 50%)",
    data: [],
  },
];

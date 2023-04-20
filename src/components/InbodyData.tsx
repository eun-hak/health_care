// export const InbodyData = (): { [key: string]: string } => {
//   const keys = Object.keys(localStorage);
//   const storageData: { [key: string]: string } = {};
//   keys.forEach((key) => {
//     storageData[key] = localStorage.getItem(key) || "";
//   });
//   return storageData;
// };

import { ChartDataType } from "../const/ChartData";
import { ChartData } from "../const/ChartData";

export const InbodyData = (): ChartDataType[] => {
  const keys = Object.keys(localStorage);

  const chartData = ChartData.map((item) => {
    const data = item.data.map((d) => {
      const value = localStorage.getItem(`${item.id}_${d.x}`);
      return { ...d, y: value ? Number(value) : 0 };
    });
    return { ...item, data };
  });

  return chartData;
};

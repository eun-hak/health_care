import { ResponsiveLine } from "@nivo/line";
import { AxisProps } from "@nivo/axes";

import { ScaleLinear } from "d3-scale"; // ScaleLinear 를 import 해줍니다.
import { ChartDataType } from "../const/ChartData";

const LIneChart = ({ data }: { data: ChartDataType[] }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={
      {
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "날짜",
        legendOffset: 36,
        legendPosition: "middle",
      } as AxisProps<ScaleLinear<number, number>> | undefined
    }
    axisLeft={
      {
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "kg",
        legendOffset: -40,
        legendPosition: "middle",
      } as AxisProps<ScaleLinear<number, number>> | undefined
    }
    colors={{ scheme: "category10" }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default LIneChart;

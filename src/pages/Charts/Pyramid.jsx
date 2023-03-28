import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";
import { ChartsHeader } from "../../components";

const Pyramid = () => {
  const { currentModde } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSetting={{ background: "white" }}
          tooltip={{ enable: true }}
          bacgkround={currentModde === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationLegend,
              AccumulationDataLabel,
              AccumulationTooltip,
              AccumulationSelection,
              PyramidSeries,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="85%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ Mode: "Drop", fill: "red" }}
              dataLabel={{ visible: true, position: "Inside", name: "text" }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;

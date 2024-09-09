import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function LinePlot({
  data,
  width = 540,
  height = 300,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}) {
  const gx = useRef();
  const gy = useRef();

  // Assuming we're plotting budget utilization or savings progress.
  const plotData = data.budgetUtilization.length
    ? data.budgetUtilization
    : data.savingsProgress;

  // Define x and y scales
  const x = d3.scaleLinear(
    [0, plotData.length - 1],
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear(d3.extent(plotData), [
    height - marginBottom,
    marginTop,
  ]);

  const line = d3.line((d, i) => x(i), y);

  // Add x and y axes
  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

  return (
    <svg
      width={width}
      height={height}
      className="bg-white rounded-lg font-bold mt-3"
    >
      {/* X axis */}
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      {/* Y axis */}
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
      {/* Line */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(plotData)}
      />
      {/* Data points */}
      <g fill="white" stroke="currentColor" strokeWidth="1.5">
        {plotData.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}

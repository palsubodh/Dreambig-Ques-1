import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Pie = ({ data2 }) => {
  console.log(data2);
  return (
    <PieChart
      data={data2}
      // label={(props) => { return (props.dataEntry.name);}}
      label={({ dataEntry }) => {
        return `${Math.round(dataEntry.percentage)} %`, dataEntry.name;
      }}
      labelPosition={75}
      lengthAngle={360}
      lineWidth={100}
      paddingAngle={0}
      radius={50}
      rounded={false}
      startAngle={0}
      style={{
        height: "100vh",
      }}
      viewBoxSize={[100, 100]}
      labelStyle={{ fontSize: "3px" }}
      animate={true}
      animationDuration={100}
      animationEasing={"ease-out"}
    />
  );
};

export default Pie;

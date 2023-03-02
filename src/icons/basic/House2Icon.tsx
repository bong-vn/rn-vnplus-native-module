import * as React from "react";
import Svg, { Path } from "react-native-svg";

const House2 = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20.6001 10.0001V19.0001C20.6001 20.1047 19.7047 21.0001 18.6001 21.0001H6.6001C5.49553 21.0001 4.6001 20.1047 4.6001 19.0001V10.0001M22.6001 12.0001L12.6001 2.00012L2.6001 12.0001"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.6001 21.0001V12.0001H15.6001V21.0001"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.6001 6.00012V3.00012H19.6001V9.00012"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default House2;

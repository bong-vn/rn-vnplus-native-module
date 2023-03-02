import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HashIcon = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M4.20117 9.00012H20.2012"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.20117 15.0001H20.2012"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.2012 3.00012L8.20117 21.0001"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.2012 3.00012L14.2012 21.0001"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HashIcon;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GlobeIcon = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12.0015 22.0001C17.5243 22.0001 22.0015 17.523 22.0015 12.0001C22.0015 6.47727 17.5243 2.00012 12.0015 2.00012C6.47862 2.00012 2.00146 6.47727 2.00146 12.0001C2.00146 17.523 6.47862 22.0001 12.0015 22.0001Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.00146 12.0001H22.0015"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.0015 2.00012C14.5027 4.73847 15.9242 8.29216 16.0015 12.0001C15.9242 15.7081 14.5027 19.2618 12.0015 22.0001C9.50018 19.2618 8.07871 15.7081 8.00146 12.0001C8.07871 8.29216 9.50018 4.73847 12.0015 2.00012V2.00012Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default GlobeIcon;

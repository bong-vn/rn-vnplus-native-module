import * as React from "react";
import Svg, { Path } from "react-native-svg";

const House3 = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.2002 9.50012V18.0001C19.2002 19.1047 18.3048 20.0001 17.2002 20.0001H7.2002C6.09563 20.0001 5.2002 19.1047 5.2002 18.0001V9.50012M22.2002 12.0001L12.2002 3.00012L2.2002 12.0001"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default House3;

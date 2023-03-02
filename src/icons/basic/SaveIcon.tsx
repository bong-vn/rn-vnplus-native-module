import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SaveIcon = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.4014 21.0001H5.40137C4.87093 21.0001 4.36223 20.7894 3.98715 20.4143C3.61208 20.0393 3.40137 19.5306 3.40137 19.0001V5.00012C3.40137 4.46969 3.61208 3.96098 3.98715 3.58591C4.36223 3.21084 4.87093 3.00012 5.40137 3.00012H16.4014L21.4014 8.00012V19.0001C21.4014 19.5306 21.1907 20.0393 20.8156 20.4143C20.4405 20.7894 19.9318 21.0001 19.4014 21.0001Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.4014 21.0001V13.0001H7.40137V21.0001"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.4014 8.00012H9.40137"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SaveIcon;

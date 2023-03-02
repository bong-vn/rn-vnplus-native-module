import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BookmarkIcon = ({ width = 24, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.001 21.0001L12.001 16.0001L5.00098 21.0001V5.00012C5.00098 4.46969 5.21169 3.96098 5.58676 3.58591C5.96184 3.21084 6.47054 3.00012 7.00098 3.00012H17.001C17.5314 3.00012 18.0401 3.21084 18.4152 3.58591C18.7903 3.96098 19.001 4.46969 19.001 5.00012V21.0001Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BookmarkIcon;

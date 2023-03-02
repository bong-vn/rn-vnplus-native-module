import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";

const LinkedInNewSmallIcon = ({ width = 24, height = 25 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <G filter="url(#filter0_b_4700_80175)">
      <Rect x={3} y={3.5} width={18} height={18} rx={9} fill="#0072B1" />
    </G>
    <Path
      d="M9.9487 8.47826C9.9487 9.01865 9.51435 9.45652 8.97826 9.45652C8.44217 9.45652 8.00783 9.01865 8.00783 8.47826C8.00783 7.93826 8.44217 7.5 8.97826 7.5C9.51435 7.5 9.9487 7.93826 9.9487 8.47826ZM9.95652 10.2391H8V16.5H9.95652V10.2391ZM13.0799 10.2391H11.1359V16.5H13.0803V13.2134C13.0803 11.386 15.4395 11.2366 15.4395 13.2134V16.5H17.3913V12.5357C17.3913 9.45222 13.9001 9.56452 13.0799 11.0824V10.2391Z"
      fill="#FCFCFD"
    />
    <Defs />
  </Svg>
);
export default LinkedInNewSmallIcon;

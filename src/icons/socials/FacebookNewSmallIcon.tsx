import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";

const FacebookNewSmallIcon = ({ width = 24, height = 25 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <G filter="url(#filter0_b_4700_80159)">
      <Rect x={3} y={3.5} width={18} height={18} rx={9} fill="#3B5998" />
    </G>
    <Path
      d="M11.2764 17V12.5423H10V10.9373H11.2764V9.56649C11.2764 8.48925 12.0303 7.5 13.7676 7.5C14.471 7.5 14.9912 7.56227 14.9912 7.56227L14.9502 9.06105C14.9502 9.06105 14.4197 9.05628 13.8409 9.05628C13.2144 9.05628 13.114 9.3229 13.114 9.76542V10.9373H15L14.9179 12.5423H13.114V17H11.2764Z"
      fill="#FCFCFD"
    />
  </Svg>
);
export default FacebookNewSmallIcon;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FacebookLogoNoBorder = ({ width = 5, height = 10 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 5 10"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1.27638 10V5.54232H0V3.93735H1.27638V2.56649C1.27638 1.48925 2.03035 0.5 3.76765 0.5C4.47105 0.5 4.99118 0.562272 4.99118 0.562272L4.9502 2.06105C4.9502 2.06105 4.41975 2.05628 3.84089 2.05628C3.2144 2.05628 3.11402 2.3229 3.11402 2.76542V3.93735H5L4.91794 5.54232H3.11402V10H1.27638Z"
      fill="#3B5998"
    />
  </Svg>
);
export default FacebookLogoNoBorder;

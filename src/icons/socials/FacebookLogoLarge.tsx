import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FacebookLogoLarge = ({ width = 24, height = 25 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.55277 22.5V13.5846H7V10.3747H9.55277V7.63297C9.55277 5.47851 11.0607 3.5 14.5353 3.5C15.9421 3.5 16.9824 3.62454 16.9824 3.62454L16.9004 6.6221C16.9004 6.6221 15.8395 6.61256 14.6818 6.61256C13.4288 6.61256 13.228 7.1458 13.228 8.03083V10.3747H17L16.8359 13.5846H13.228V22.5H9.55277Z"
      fill="#3B5998"
    />
  </Svg>
);
export default FacebookLogoLarge;

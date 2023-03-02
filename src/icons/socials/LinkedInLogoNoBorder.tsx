import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LinkedInLogoNoBorder = ({ width = 24, height = 25 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.9487 9.47826C8.9487 10.0187 8.51435 10.4565 7.97826 10.4565C7.44217 10.4565 7.00783 10.0187 7.00783 9.47826C7.00783 8.93826 7.44217 8.5 7.97826 8.5C8.51435 8.5 8.9487 8.93826 8.9487 9.47826ZM8.95652 11.2391H7V17.5H8.95652V11.2391ZM12.0799 11.2391H10.1359V17.5H12.0803V14.2134C12.0803 12.386 14.4395 12.2366 14.4395 14.2134V17.5H16.3913V13.5357C16.3913 10.4522 12.9001 10.5645 12.0799 12.0824V11.2391Z"
      fill="#0072B1"
    />
  </Svg>
);
export default LinkedInLogoNoBorder;

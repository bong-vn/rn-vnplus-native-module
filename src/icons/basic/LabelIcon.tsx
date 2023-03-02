import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LabelIcon = ({ width = 24, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M15.5321 6.00012H5.00049C4.4482 6.00012 4.00049 6.44784 4.00049 7.00012V17.0001C4.00049 17.5524 4.4482 18.0001 5.00049 18.0001H15.5321C15.8289 18.0001 16.1103 17.8683 16.3003 17.6403L20.467 12.6403C20.776 12.2695 20.776 11.7308 20.467 11.3599L16.3003 6.35994C16.1103 6.13195 15.8289 6.00012 15.5321 6.00012Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LabelIcon;

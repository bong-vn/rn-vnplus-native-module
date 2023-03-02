import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CopyIcon = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M6.37031 15.0001H5.44723C4.9576 15.0001 4.48802 14.8056 4.1418 14.4594C3.79558 14.1132 3.60107 13.6436 3.60107 13.154V4.84628C3.60107 4.35665 3.79558 3.88707 4.1418 3.54085C4.48802 3.19463 4.9576 3.00012 5.44723 3.00012H13.7549C14.2446 3.00012 14.7141 3.19463 15.0603 3.54085C15.4066 3.88707 15.6011 4.35665 15.6011 4.84628V5.76935"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.60107 11.0001C9.60107 9.89555 10.4965 9.00012 11.6011 9.00012H19.6011C20.7056 9.00012 21.6011 9.89555 21.6011 11.0001V19.0001C21.6011 20.1047 20.7056 21.0001 19.6011 21.0001H11.6011C10.4965 21.0001 9.60107 20.1047 9.60107 19.0001V11.0001Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CopyIcon;

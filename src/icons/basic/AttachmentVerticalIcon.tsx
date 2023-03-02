import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AttachmentVertical = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M7.80031 15.0001L7.80031 8.00012C7.80031 5.68641 8.9866 3.00012 12.3003 3.00012C15.614 3.00012 16.8003 5.68641 16.8003 8.00012V18.0001C16.8003 19.2093 16.0094 21.0001 13.8003 21.0001C11.5912 21.0001 10.8003 19.2093 10.8003 18.0001V8.00012C10.8003 6.89555 11.1957 6.00012 12.3003 6.00012C13.4049 6.00012 13.8003 6.89555 13.8003 8.00012V18.0001"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default AttachmentVertical;

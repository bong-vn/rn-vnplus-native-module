import * as React from "react";
import Svg, { Path } from "react-native-svg";

const House1 = ({ width = 24, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M19.6585 9.70131L12.6585 3.57631C12.2815 3.24641 11.7185 3.24641 11.3415 3.57631L4.3415 9.70131C4.12448 9.8912 4 10.1655 4 10.4539V19.0001C4 19.5524 4.44772 20.0001 5 20.0001H9C9.55228 20.0001 10 19.5524 10 19.0001V15.0001C10 14.4478 10.4477 14.0001 11 14.0001H13C13.5523 14.0001 14 14.4478 14 15.0001V19.0001C14 19.5524 14.4477 20.0001 15 20.0001H19C19.5523 20.0001 20 19.5524 20 19.0001V10.4539C20 10.1655 19.8755 9.8912 19.6585 9.70131Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default House1;

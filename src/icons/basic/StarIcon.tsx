import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StarIcon = ({ width = 25, height = 24, color = "#242528" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M15.1359 8.74363L12.8167 3.76371C12.653 3.41226 12.1487 3.41226 11.9851 3.76371L9.66588 8.74363C9.59918 8.88687 9.46213 8.98549 9.30398 9.00406L3.80545 9.64977C3.4174 9.69534 3.26156 10.1704 3.54845 10.4332L7.61366 14.1566C7.73058 14.2637 7.78293 14.4233 7.75189 14.578L6.67279 19.957C6.59663 20.3366 7.00463 20.6302 7.3456 20.4412L12.1772 17.7625C12.3162 17.6854 12.4856 17.6854 12.6245 17.7625L17.4562 20.4412C17.7971 20.6302 18.2051 20.3366 18.129 19.957L17.0499 14.578C17.0188 14.4233 17.0712 14.2637 17.1881 14.1566L21.2533 10.4332C21.5402 10.1704 21.3844 9.69534 20.9963 9.64977L15.4978 9.00406C15.3396 8.98549 15.2026 8.88687 15.1359 8.74363Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default StarIcon;

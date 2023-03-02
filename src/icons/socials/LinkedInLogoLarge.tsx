import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LinkedInLogoLarge = ({ width = 24, height = 25 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M6.89739 5.45652C6.89739 6.5373 6.0287 7.41304 4.95652 7.41304C3.88435 7.41304 3.01565 6.5373 3.01565 5.45652C3.01565 4.37652 3.88435 3.5 4.95652 3.5C6.0287 3.5 6.89739 4.37652 6.89739 5.45652ZM6.91304 8.97826H3V21.5H6.91304V8.97826ZM13.1598 8.97826H9.27183V21.5H13.1606V14.9269C13.1606 11.2721 17.879 10.9731 17.879 14.9269V21.5H21.7826V13.5714C21.7826 7.40443 14.8002 7.62904 13.1598 10.6648V8.97826Z"
      fill="#0072B1"
    />
  </Svg>
);
export default LinkedInLogoLarge;

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TwitterLogoLarge = ({ width = 24, height = 25 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M20.2163 8.6096C20.2292 8.78995 20.2292 8.97034 20.2292 9.15069C20.2292 14.6516 16.0423 20.99 8.38988 20.99C6.03231 20.99 3.84225 20.3072 2 19.122C2.33497 19.1606 2.657 19.1735 3.00486 19.1735C4.95013 19.1735 6.74087 18.5165 8.17087 17.3957C6.3415 17.357 4.80844 16.159 4.28024 14.5099C4.53792 14.5486 4.79556 14.5743 5.06612 14.5743C5.43971 14.5743 5.81334 14.5228 6.16115 14.4327C4.2545 14.0461 2.82447 12.3714 2.82447 10.3488V10.2973C3.37841 10.6065 4.0226 10.7997 4.70534 10.8254C3.58453 10.0782 2.85024 8.80284 2.85024 7.35996C2.85024 6.587 3.05633 5.87845 3.41707 5.26007C5.46545 7.7851 8.54446 9.43407 11.997 9.61446C11.9326 9.30527 11.894 8.98323 11.894 8.66115C11.894 6.36799 13.7491 4.5 16.0551 4.5C17.2532 4.5 18.3353 5.00243 19.0955 5.81405C20.0359 5.6337 20.9377 5.28584 21.7364 4.80919C21.4272 5.77542 20.7702 6.58704 19.9071 7.10232C20.7445 7.01218 21.5561 6.78024 22.3033 6.4582C21.7365 7.28267 21.0279 8.01696 20.2163 8.6096Z"
      fill="#1DA1F2"
    />
  </Svg>
);
export default TwitterLogoLarge;
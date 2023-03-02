import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ArchiveIcon = ({ width = 25, height = 24, color = '#242528' }) => (
  <Svg
    width={width}
    height={height}
    viewBox='0 0 25 24'
    fill='none'
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d='M18.8013 8.00012H6.80127C6.24898 8.00012 5.80127 8.44784 5.80127 9.00012V18.0001C5.80127 18.5524 6.24899 19.0001 6.80127 19.0001H18.8013C19.3536 19.0001 19.8013 18.5524 19.8013 18.0001V9.00012C19.8013 8.44784 19.3536 8.00012 18.8013 8.00012Z'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M10.8013 13.5001H14.8013'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M20.0753 5.00012H5.52721C5.21036 5.00012 4.91225 5.15029 4.72365 5.40489L3.98291 6.40489C3.49405 7.06486 3.96516 8.00012 4.78647 8.00012H20.8161C21.6374 8.00012 22.1085 7.06486 21.6196 6.40489L20.8789 5.40489C20.6903 5.15029 20.3922 5.00012 20.0753 5.00012Z'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default ArchiveIcon

import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const HeartIcon = ({
  height = 21,
  width = 20,
  selected = false,
  color = selected ? '#E83017' : '#94969E',
  fill = '#E83017',
}: {
  height?: number
  width?: number
  color?: string
  fill?: string
  selected?: boolean
}) => (
  <Svg
    width={height}
    height={width}
    viewBox='0 0 21 20'
    fill={selected ? fill : 'none'}
  >
    <Path
      d='M16.8434 4.51177C16.4768 4.13807 16.0417 3.84162 15.5627 3.63937C15.0837 3.43711 14.5704 3.33301 14.0519 3.33301C13.5335 3.33301 13.0201 3.43711 12.5411 3.63937C12.0621 3.84162 11.627 4.13807 11.2605 4.51177L10.4998 5.28697L9.73916 4.51177C8.99882 3.75727 7.9947 3.3334 6.94771 3.3334C5.90071 3.3334 4.89659 3.75727 4.15626 4.51177C3.41592 5.26627 3 6.28959 3 7.35661C3 8.42364 3.41592 9.44696 4.15626 10.2015L4.91691 10.9767L10.4998 16.6663L16.0827 10.9767L16.8434 10.2015C17.21 9.82793 17.5009 9.38443 17.6994 8.89631C17.8979 8.40818 18 7.88498 18 7.35661C18 6.82824 17.8979 6.30505 17.6994 5.81692C17.5009 5.32879 17.21 4.8853 16.8434 4.51177V4.51177Z'
      stroke={selected ? fill : color}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

HeartIcon.defaultProps = {
  height: 21,
  width: 20,
  color: '#94969E',
  fill: '#E83017',
  selected: false,
}

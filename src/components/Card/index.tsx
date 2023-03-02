import React, { ReactNode } from 'react'
import { View } from 'react-native'

import { makeStyles } from './styles'

// shared card component that acts as parent component for basic css properties like background, padding etc.
const Card = ({ children, style }: { children: ReactNode; style?: any }) => {
  const styles = makeStyles()
  return <View style={[styles.mainContainer, style]}>{children}</View>
}

Card.defaultProps = {
  style: {},
}

export default Card

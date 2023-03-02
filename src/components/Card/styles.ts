// import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'

/**  Please give the some definition */
export const makeStyles = () => {
  // const { themeColors } = useTheme()

  return StyleSheet.create({
    mainContainer: {
      backgroundColor: '#FFF',
      padding: 16,
      borderRadius: 16,
      marginTop: 10,
    },
  })
}

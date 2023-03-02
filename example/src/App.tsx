import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import RNVNPlus2Module, {
  ArchiveIcon,
  AtIcon,
  AttachmentDiagonal,
  AttachmentVertical,
  Counter,
} from 'rn-vnplus-module-attempt2'
import 'react-native-gesture-handler'

const App = () => {
  useEffect(() => {
    console.log(RNVNPlus2Module)
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ArchiveIcon />
      <AtIcon />
      <AttachmentDiagonal />
      <AttachmentVertical/>
      <Counter label='Hello Worlddddd' />
    </SafeAreaView>
  )
}

export default App

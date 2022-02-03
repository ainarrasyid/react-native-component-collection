
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {Provider as PaperProvider} from 'react-native-paper'

import MessageListener from '@helpers/messaging-and-notification'

import StackNavigator from '@navigators/stack-navigator'
import { LogBox } from 'react-native'

function App() {
  useEffect(()=>{
    LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
  },[])
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>

      <MessageListener />
    </>
  )
}

export default App

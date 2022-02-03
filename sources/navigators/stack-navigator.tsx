
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { NavigatorParameters } from '@models/navigators'

import Home from '@screens/home'
import PickImage from '@screens/pick-image'
import DropdownCollection from '@screens/Dropdown'
import CarouselCollection from '@screens/Carousel'

const Stack = createStackNavigator<NavigatorParameters>()

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions = {{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: true, // false to remove header
        gestureEnabled: true // default true for ios, false for android
      }}
    >
      <Stack.Screen
        name = "Home"
        component = {Home}
        options = {{
          headerTitle: 'React Native Component Collection'
        }}
      />
      <Stack.Screen
        name="Dropdown"
        component={DropdownCollection}
        options={{
          headerTitle: 'Dropdown Collection'
        }}
      />
      <Stack.Screen
        name = "PickImage"
        component = {PickImage}
        options = {{
          headerTitle: 'Pick Image'
        }}
      />
      <Stack.Screen
        name="Caraousel"
        component={CarouselCollection}
        options={{
          headerTitle: 'Caraousel Colection'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator

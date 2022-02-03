import React from 'react'
import {View} from 'react-native'
import {Dropdown, DropDownProps} from 'react-native-material-dropdown'
import {Paragraph} from 'react-native-paper'


/*
  nih library lumayan recomened kalo mau drpdown yang simple 
  tapi masih ada bug pas di kasih searchable iten gabisa di select habis input text

*/

export type DataTypes = {
  title?: string,
  value: string
}

interface CustomMaterialDropdownProps {
  dropDownProps: DropDownProps
}

function CustomMaterialDropdown(props: CustomMaterialDropdownProps) {
  const {dropDownProps} = props

  return (
    <View
      style={{
        marginTop:10
      }}
    >
      <Paragraph>n4kz/react-native-material-dropdown</Paragraph>
      <Dropdown
        {...dropDownProps}
        label={
          {...dropDownProps}.value == undefined ||
          {...dropDownProps}.value == '' ?
          {...dropDownProps}.label : ''
        }
        dropdownOffset={{top:0, left:0}}
        rippleInsets={{top:0, bottom:10, left:0, right:0}}
        rippleSequential
        containerStyle={{
          borderColor:'rgba(0,0,0,1)',
          borderWidth:1,
          borderRadius:10,
          padding:10,
          backgroundColor:'white'
        }}
        itemTextStyle={{
          paddingHorizontal: 20
      }}

        pickerStyle={{
          borderRadius:20,
          elevation: 6,
          shadowColor: 'gray',
          shadowOffset: {
              height: 2,
              width: 0
          },
          shadowOpacity: 0.5,
          shadowRadius: 3

        }}
        useNativeDriver
        inputContainerStyle={{
          marginBottom:-10,
          borderBottomWidth:0
        }}
      />
    </View>
  )
}

export default CustomMaterialDropdown

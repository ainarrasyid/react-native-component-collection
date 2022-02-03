import React, { Dispatch, SetStateAction, useState } from 'react'
import { View } from 'react-native'
import DropDownPicker, {DropDownPickerProps} from 'react-native-dropdown-picker'
import { Paragraph } from 'react-native-paper'

export type optionsType = {
    label: string,
    value: string
  }


interface CustomDropdownPickerProps{
  dropdownProps?: DropDownPickerProps,
  options: optionsType[],
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  placeholder?: string
}
/*
  nih library lumayan recomened kalo mau drpdown yang simple 
  tapi masih ada bug pas di kasih searchable iten gabisa di select habis input text

*/

function CustomDropdownPicker (props: CustomDropdownPickerProps){
  const {dropdownProps, value, setValue, placeholder} = props
  const [items, setItems] = useState(props.options as any)
  const [open, setOpen] = useState(false)
  // const [value, setValue] = useState('')
  return (
    <View
      style={{
        marginTop:10
      }}
    >
      <Paragraph>hossein-zare/react-native-dropdown-picker (still updated on Des 2021)</Paragraph>
      <View>
        <DropDownPicker
        {...dropdownProps}
          open={open}
          setOpen={setOpen}
          items={items}
          setItems={setItems}
          value={value}
          setValue={setValue}
          placeholder={placeholder}
          style={{
            backgroundColor: 'white' // optional
          }}
          dropDownContainerStyle={{
            backgroundColor:'white'
          }}
          disableBorderRadius={false}
          listMode="FLATLIST"
        />
      </View>
    </View>
  )
}

export default CustomDropdownPicker

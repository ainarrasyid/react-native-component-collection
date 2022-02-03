import { placeholder } from '@babel/types'
import { Color } from '@references/constants/color'
import React from 'react'
import { View } from 'react-native'
import { IconButton, Paragraph } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'


interface dropdownSelectPropsType {
  options: string[]
  placeholder: string
  onSelectItem?: (value: string) => void
}

/*
  nih library lumayan recomened kalo mau drpdown yang simple 
  selain itu library ini juga lumayan responsive dan flexible styling
  dan data selain array of string bisa pakai array of object juga
  cuman kalo ga salah nih library perlu setting di node_module buat setting style tertentu
  di githuh masih update di tahun 2022 kalo ga percaya cek aja xixixi

*/

function CustomDropdownSelect(props: dropdownSelectPropsType){
  const {options, onSelectItem, placeholder} = props
  return (
    <View
      style={{
        marginTop:10,
        marginBottom:50
      }}
    >
    <Paragraph>
      AdelRedaa97/react-native-select-dropdown
    </Paragraph>
    <View
      style={{
        flex:1,
        flexDirection:'row',
        backgroundColor:'red'
      }}
    >
      <SelectDropdown
        data={options}
        onSelect={(selectedItem)=>{
          if (onSelectItem){
            onSelectItem(selectedItem)
          }
        }}
        buttonTextAfterSelection={(selectedItem)=>{
          return selectedItem
        }}
        rowTextForSelection={(item)=>{
          return item
        }}
        defaultButtonText={placeholder}
        renderDropdownIcon={(isOpened)=>{
          return (
            <IconButton
              icon={isOpened ? 'chevron-up' : 'chevron-down'}
            />
          )
        }}
        buttonStyle={{
          backgroundColor: 'white',
          borderRadius: 10,
          borderWidth:1,
          flex:1
        }}
        buttonTextStyle={{
          textAlign:'left',
          color:Color.superDarkGray
        }}
        dropdownStyle={{
          borderRadius:10,
          backgroundColor:'white'
        }}
        rowStyle={{
          borderBottomWidth:0,
          paddingHorizontal:10
        }}
        rowTextStyle={{
          textAlign:'left'
        }}
        dropdownOverlayColor="rgba(0,0,0,0.5)"
      />
    </View>
    </View>
  )
}

export default CustomDropdownSelect

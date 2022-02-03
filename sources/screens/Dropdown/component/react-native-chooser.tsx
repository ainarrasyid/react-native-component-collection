import React from 'react'
import { View } from 'react-native'
import { Paragraph } from 'react-native-paper'
import {Select, Option} from 'react-native-chooser'
import { optionsType } from './dropdown-picker'



/*
  this probably good but not updated and still use javascript
  NOT RECOMMENDED USING THIS LIBRARY ON PRODUCTION use this on your own project
*/

export type CustomDropdownChooserTypes = {
  option: optionsType[]
}


function CustomDropdownChooser(props: CustomDropdownChooserTypes){
  const {option} = props
  return (
    <View
    style={{
      marginTop:10
    }}
    >
      <Paragraph>gs-akhan/react-native-chooser</Paragraph>
      <Select
        onSelect = {()=>{}}
        defaultText  = "Select"
        style = {{
          borderWidth : 1,
          borderColor : '#000',
          borderRadius:10,
          padding:15,
          width:'100%',
          backgroundColor:'white'
        }}
        backdropStyle  = {{backgroundColor : 'rgba(0,0,0,0.3)'}}
        transparent
        optionListStyle = {{
          backgroundColor : "#F5FCFF",
          borderRadius: 10,
          borderWidth:0,
          elevation:6
        }}
      >
        {
          option.map(item=>(
            <Option key={item.value} value = {item.value}>{item.label}</Option>
          ))
        }
          {/* <Option value = {{name : "azhar"}}>Azhar</Option>
          <Option value = "johnceena">Johnceena</Option>
          <Option value = "undertaker">Undertaker</Option>
          <Option value = "Daniel">Daniel</Option>
          <Option value = "Roman">Roman</Option>
          <Option value = "Stonecold">Stonecold</Option>
          <Option value = "Rock">Rock</Option>
          <Option value = "Sheild">Sheild</Option>
          <Option value = "Orton">Orton</Option> */}
        </Select>
    </View>
  )
}

export default CustomDropdownChooser

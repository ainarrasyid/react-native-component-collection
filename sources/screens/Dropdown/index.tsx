import { StackScreenPropsType } from '@models/navigators'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { DropDownData } from 'react-native-material-dropdown'
import CustomDropdownPicker, { optionsType } from './component/dropdown-picker'
import CustomMaterialDropdown from './component/meterial-dropdown'
import CustomDropdownChooser from './component/react-native-chooser'
import CustomDropdownSelect from './component/select-dropdown'


function DropdownCollection({navigation}:StackScreenPropsType<'Dropdown'>){
  const contries = ['Egypt', 'Canada', 'Australia', 'Ireland']
  const [fruits, setFruits]= useState<DropDownData[]>([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Melon', value: 'melon'},
    {label: 'Kiwi', value: 'kiwi'},
    {label: 'Mangoosten', value: 'mangoosten'},
    {label: 'Pineapple', value: 'pineapple'},
    {label: 'Mango', value: 'mango'},
    {label: 'Orange', value: 'orange'},
    {label: 'Cocoa', value: 'cocoa'},
    {label: 'Dragon Fruit', value: 'dragonfruit'},
    {label: 'Jack Fruit', value: 'jackfruit'},
    {label: 'Durian', value: 'durian'}
  ])
  const [selectedFruit, setSelectedFruit] = useState('')
  const [selectedContries, setSelectedContries] = useState('')

  // useEffect(()=>{
  //   console.log(selectedFruit)
  // },[selectedFruit])
  

  return (
    <View
      style={{
        flex:1
      }}
    >
      <View
        style={{
          paddingHorizontal:24
        }}
      >
        <CustomDropdownSelect
          options={contries}
          placeholder="Select Contries"
          onSelectItem={value=>setSelectedContries(value)}
        />
        <CustomDropdownPicker
          options={fruits as optionsType[]}
          value={selectedFruit}
          setValue={setSelectedFruit}
          placeholder="Select fruit"
        />
        <CustomMaterialDropdown
          dropDownProps={{
            data:fruits,
            label:'Favorite Fruit',
            onChangeText:(_,index,data)=>{
              setSelectedFruit(data[index].label ?? '')
            },
            value: selectedFruit
          }}
        />
        <CustomDropdownChooser
          option={fruits as optionsType[]}
        />
      </View>
    </View>
  )
}

export default DropdownCollection

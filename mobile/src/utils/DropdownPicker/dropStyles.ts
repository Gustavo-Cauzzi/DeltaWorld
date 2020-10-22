import {StyleSheet} from 'react-native';

const dropStyles = StyleSheet.create({
  dropDownPicker:{
    backgroundColor:"#f0f0f0",
    borderRadius:10,
    borderColor:"#e5e5e5",
    borderWidth:1,
    paddingHorizontal:15
  },
  
  dropDownPickerItems:{
    backgroundColor:"#F5F5F5",
    marginVertical:2,
    borderRadius:10
  },
  
  dropDownPickerLabel:{
    color:"#222",
    fontFamily:"Archivo_400Regular"
  },
  
  dropDownPickerBox:{
    backgroundColor:"#FFF",
    marginVertical:5,
  },
  
  dropDownPickerContainer:{
    marginHorizontal:10,
    marginVertical:10,
  },
  
  dropDownPickerPlaceholder:{
    color:"#C1BCCC",
    fontSize:15,
    fontFamily:"Archivo_400Regular",
  }
});

export default dropStyles;
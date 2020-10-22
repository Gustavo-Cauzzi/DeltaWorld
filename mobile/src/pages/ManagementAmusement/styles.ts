import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F5F5F5",
    flex:1
  },

  title:{
    color:"#FFF"
  },

  form:{
    paddingHorizontal: 10,
    paddingVertical:20,
    marginTop:10,
    marginHorizontal:10,
    flexDirection:'column',
    flex:1,
    borderRadius:5,
  },

  label:{
    color:"#222",
    fontFamily: "Archivo_400Regular",
    fontSize:20
  },

  input:{
    fontFamily:"Archivo_400Regular",
    marginHorizontal:10,
    marginVertical:5,
    padding:10,
    paddingHorizontal:20,
    backgroundColor:"#f0f0f0",
    borderRadius:10,
    borderColor:"#e5e5e5",
    borderWidth:1,
    fontSize:15
  },

  buttonContainer:{
    flex:1,
    flexDirection:'row',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },

  submitButton:{
    backgroundColor:"#D25A5A",
    flex:1,
    maxWidth:300,
    borderRadius:5,
    height:40,
    alignItems:"center",
    justifyContent:"center"
  },

  buttonText:{
    color:"#f5f5f5",
    fontFamily:"Archivo_700Bold",
    fontSize:20
  }
});

export default styles;
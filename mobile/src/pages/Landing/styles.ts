import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    padding:40,
    backgroundColor:"#AC3333",
  },

  logoContainer:{
    flex:1,
    backgroundColor:"#aaa",
  },

  logoText:{
    color:"#E5E5E5",
  },

  footer:{
    flex:1,
    justifyContent:"flex-end"
  },

  footerContent:{
    alignItems: "center",
    marginTop:40,
  },

  textWelcome:{
    fontFamily:"Poppins_400Regular",
    fontSize: 25,
    color: "#E5E5E5",
  },

  textWelcomeBold:{
    fontFamily:"Poppins_600SemiBold",
    fontSize: 20,
    color: "#E5E5E5"
  },

  buttonsContainer:{
    flexDirection:"row",
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '100%',
    marginHorizontal: 20,
    marginBottom:10,
  },

  button:{
    height: 75,
    borderRadius: 8,
    padding: 24,
    marginTop: 10,
    justifyContent: 'center',
    alignItems:"center"
  },

  buttonPrimary:{
    backgroundColor:"#e5e5e5",
  },

  buttonSecondary:{
    backgroundColor:"#D25A5A",
    color:"#EFEFEF",
    height: 30,
    marginTop: 0,
  },

  textButton:{
    fontFamily: "Archivo_400Regular",
    fontSize: 27,
    alignItems:"flex-end",
    justifyContent:"center"
  },

  textButtonPrimary:{
    color:"#AC3333",
  },
  
  textButtonSecondary:{
    color:"#E5E5E5",
    fontSize:18,
  },

  login:{
    position: "absolute",
    right: 20,
  }

});

export default styles;
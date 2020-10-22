import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    padding: 40,
    paddingBottom: 0,
    backgroundColor: '#AC3333',
  },

  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  topRightBar:{
    marginTop:10,
  },

  title:{
    fontFamily:'Archivo_700Bold',
    color:"#fff",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 240,
    marginVertical: 40,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  textVoltar:{
    color:"#FFF"
  }
});

export default styles;
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { PRIMARY_COLOR, BACKGROUND_COLOR } from './colors';

const { height, width } = Dimensions.get("window")

export const globalStyles = StyleSheet.create({
  container:{
    backgroundColor:BACKGROUND_COLOR
  },
    sectionContainerHome: {
     backgroundColor:PRIMARY_COLOR,
     width:width,
     height:100,
     borderBottomLeftRadius:40,
     display:"flex",
     justifyContent: "flex-start",
     alignItems: "center",
     flexDirection: "row",
     padding:10,
    },
    sectionContainerHomeBottom:{
    width:width,
    height:50,
    backgroundColor:BACKGROUND_COLOR,
    borderTopRightRadius:40,
  
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    loading:{
      position: 'absolute',
      top: height*0.50,
      left:width*0.45,
    }
  });

  export const stylesText = StyleSheet.create({
    textHeader:{
      color:"#CAC9CA",
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf:"center",
    }
  })
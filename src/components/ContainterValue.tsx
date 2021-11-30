import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../theme/colors'
import { Bitcoin } from '../intefaces/interfaces';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get("window")


const ContainterValue =(props:any) => {
  const { navigate }:any = useNavigation()
    const {
        nombre,
        unidad_medida,
        codigo,
        valor,
        fecha,
    }: Bitcoin = props.data || {}

    return (
        <View style={styles.container}>
            <View
                style={styles.containerText}
            >
                <Text style={{color: "#B2ADC3" , fontSize:15}} > {nombre}</Text>
                <Text style={{color: "gray" , fontSize:14, paddingLeft:5}} >{unidad_medida}</Text>
            </View> 
            <View
            style={styles.containerIcons}
            >
                <Icon  
                name="information-circle-outline" 
                size={33} color={"#6B5888"} 
                style={{marginHorizontal:10}}
                onPress={()=>navigate("Stadistics",{codigo,unidad_medida,valor,fecha, nombre } )} 
                />
                <Icon  
                name="chevron-forward-outline"
                 size={25} 
                 color={"#6B5888"} 
                 onPress={()=>navigate("SpecificIndicators",{codigo} )}
                 />
            </View>
        </View>
    )
}

export default ContainterValue


const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: width,
        height: 80,
        padding: 10,
        marginVertical:4,
        backgroundColor:BACKGROUND_COLOR,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth:2,
        borderColor:PRIMARY_COLOR
    },
    containerText:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "space-between",
            height: "100%",
            
    },
    containerIcons:{
        display: 'flex',
        flexDirection: 'row',
        width:width * 0.19,
        justifyContent: "flex-end",
        height: "100%",
        alignItems: "center",
    }
})
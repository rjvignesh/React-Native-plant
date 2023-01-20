import { Icon, withTheme } from "@rneui/themed";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { PROGRESSLIST, WEATHERDATA } from "../constant/Datas";
import { img1 } from "../constant/Images";

const progressInd = ({id,progress,icon})=>{
    return(
    <View key={id} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Icon
        name={icon}
        type="evilicon"
        size={40}>
        </Icon>
        <View style={{width:50}}>
            <View style={{width:"100%", height:5,backgroundColor:"gray",borderRadius:10}}/>
            <View style={{width:progress, height:5,backgroundColor:"green",borderRadius:10,position:"absolute"}}/>
        </View>
    </View> )
}

const weatherDetails = (item) =>{
    return (
    <View style={{flexDirection:"row",alignItems:"center"}}>
        <View style={{flex:3,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
            <Icon 
            name={item.icon}
            type="ionicon"
            size={30}
            />
            <Text style={{fontSize:25, padding: 10}}>{item.name}</Text>
        </View>
        <View style={{flex:1,justifyContent:"flex-end"}}>
            <Text>{item.detail}</Text>
        </View>
    </View> )
}
const Details = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image 
                source={img1}
                resizeMode="cover"
                style={styles.background}
                ></Image>
                <View style={{position:"absolute",top:50,left:30,alignItems:"flex-start"}}
                >
                <Icon 
                name="chevron-circle-left"
                type="font-awesome"
                color="white"
                size={60}
                onPress={()=>navigation.navigate("Home")}> 
                </Icon>
                <Text style={styles.headerText}>
                    Glory 
                </Text>
                <Text style={styles.headerText}>
                    Mantra's
                </Text>
                </View>
            </View>
            <View style={styles.detail}>
                <Text style={{padding:30,fontSize:20}}>Requirements</Text>
                <View style={{flexDirection:"row"}}>
                {PROGRESSLIST.map((item)=>{
                    return progressInd(item)
                })}
                </View>
                <View>
                    {WEATHERDATA.map((item)=>{
                        return (
                            <View key={item.id}>
                                {weatherDetails(item)}
                            </View>
                        )
                    })}
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{backgroundColor:"green", width:"40%", height:80,
                    flexDirection:"row",justifyContent:"center",alignItems:"center",
                    borderBottomRightRadius:10,borderTopRightRadius:10}}>
                        <Text style={{fontSize:20,color:"white"}}>Take action</Text>
                        <Icon 
                        name="arrow-forward-outline"
                        type="ionicon"
                        color="white"
                        size={30}
                        />
                    </View>
                    <View style={{flexDirection:"row",width:"60%", padding:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:15,color:"gray", width:"60%",padding:10}}>Almost 2 weeks of growing time</Text>
                        <Icon 
                        name="arrow-down-outline"
                        type="ionicon"
                        color="gray"
                        size={30}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    background:{
        width:Dimensions.get('screen').width,
        height:"50%"
    },
    detail:{
        position:"absolute",
        bottom:0,
        right: 0,
        height:"60%",
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:50,
        borderTopRightRadius:50
    },
    headerText:{
        color:"white",
        fontSize:50,
        marginTop:10
    }
});
export default Details 
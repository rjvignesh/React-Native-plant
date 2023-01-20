import React from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity} from "react-native";
import { FRIENDLIST, SLIDEDATA } from "../constant/Datas";
import { Icon, withTheme } from "@rneui/themed";
import { img4, img5, img6 } from "../constant/Images";
const imgRender = ({item})=>{
    return (
        <View>
        <Image 
        source={item.imageSrc}
        resizeMode="cover"
        style={{width:100, height:"70%", borderRadius:15,margin:5}}/>
        <TouchableOpacity>
            <View style={{position:"absolute",right:5,bottom:15,backgroundColor:"green",paddingLeft:10,borderBottomLeftRadius:10,borderTopLeftRadius:10}}>
                <Text style={{color:"white"}}>{item.name}</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}
const PlantDetails = (navigation)=>{
    console.log("press");
    navigation.navigate("Details");
}
const Home = ({ navigation })=>{
    return(
        <View style={Styles.container}>
            <View style={{height:"30%",backgroundColor:"green",borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
                <View style={{paddingLeft:20,flex:1,paddingTop:30}}>
                    <Text style={{fontSize:25,color:"white"}}>New plants</Text>
                    <FlatList
                    horizontal
                    data={SLIDEDATA}
                    renderItem={imgRender}
                    keyExtractor={(item)=>item.id}
                    showsHorizontalScrollIndicator={false}
                    >
                    </FlatList>
                </View>
            </View>
            <View style={{height:"50%",backgroundColor:"white",borderRadius:50,borderWidth:10,borderColor:"white"}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",
                margin:10,alignItems:"center"}}>
                    <Text style={{fontSize:30}}>Today's Share</Text>
                    <Text style={{fontSize:15,color:"gray"}}>See all</Text>
                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:1,justifyContent:"space-around",alignItems:"center"}}>
                    <Image source={img4}
                    resizeMode="center"
                    style={{
                        width:"90%",
                        height:"45%",
                        borderRadius:20
                    }}></Image>
                    <Image source={img5}
                    resizeMode="center"
                    style={{
                        width:"90%",
                        height:"45%",
                        borderRadius:20
                    }}></Image>                    
                    </View>
                    <View style={{flex:1, alignItems:"center",justifyContent:"space-around"}}>
                    <Image source={img6}
                    resizeMode="cover"
                    style={{
                        width:"90%",
                        height:"95%",
                        borderRadius:20
                    }}></Image>                          
                    </View>
                </View>
            </View>
            <View style={{height:"20%",backgroundColor:"#D3D3D3",
            paddingLeft:20,justifyContent:"space-around"}}>
                <View>
                <Text style={{fontSize:20}}>Added Friends</Text>
                <Text style={{color:"gray"}}>5 total</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-around",alignItems:"center"}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={{flexDirection:"row",paddingLeft:15}}>
                        {FRIENDLIST.map((item,index)=>{
                            return <Image
                                source={item.imgSrc}
                                key={index}
                                style={{
                                    width:50,
                                    height:50,
                                    borderRadius:25,
                                    borderColor:"green",
                                    borderWidth:3,
                                    marginLeft:-15
                                }}
                            />
                        })}
                        </View>
                        <View>
                            <Text style={{color:"green"}}> +2 more</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around",
                    alignItems:"center",paddingLeft:20}}>
                        <Text style={{color:"green"}} d>Add More</Text>
                        <View style={{width:50,height:50,alignItems:"center",
                        backgroundColor:"#C1D1D1",borderRadius:15,marginLeft:15}}>
                            <Icon name="plus" type="antdesign" size={50} color="green"
                             onPress={()=>PlantDetails(navigation)}></Icon>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    }
})
export default Home
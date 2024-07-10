import react from "react";
import { Image, Linking, StyleSheet, Text, View,Button } from "react-native";

const NetflixCard = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Netflix Card</Text>
            <View style={styles.poster}>
                <Image 
                style={styles.imgStyle}
                source={require('../../assets/netflix.jpg')} />
           
            <View style={styles.poster_info}>
                 <Text style={styles.poster_title}>Fistful of Vengeance</Text>
                 <Text style={styles.poster_text}>A revenge mission becomes a fight to save the world from an ancient threat when superpowered.</Text>
            </View>
            <Button title="Watch Now" onPress={() => Linking.openURL('https://www.netflix.com/in/')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container : {
    padding : 50,
    justifyContent :"center",
    alignItems: "center",
},
header : {
    fontSize : 30,
    marginBottom:20,
    fontFamily : "sans-serif",
},
poster : {
    width: 250,
    borderWidth : 0.5,
    alignItems : "center",
    padding:5,
    borderRadius:15,
},
poster_info:{
    alignItems : "center",
    marginVertical:10,
},

poster_title : {
    fontSize:20,
    marginBottom : 10,
},

poster_text :{
    color: "#999",
    paddingHorizontal : 20,
    marginBottom : 10,
 },
 imgStyle :{
    width : "100%",
    height: undefined,
    aspectRatio : 1,
    borderRadius:10,
},
 buttonStyle : {
    borderWidth : 0,
    borderRadius : 20,
 },
});

export default NetflixCard;
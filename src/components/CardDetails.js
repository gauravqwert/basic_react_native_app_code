import react from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const CardDetail = ({textData,imgScr}) => {
    return (
       
        <View style={styles.listStyle}>
           <Text style={styles.textStyle}>{textData}</Text>
           <Image
              style={styles.imageStyle}
            source={imgScr}/>
        </View>
    )
};

const styles = StyleSheet.create({
    listStyle : {
        display : "flex",
        justifyContent : "center",
        alignItems: "center",
        marginTop:40,
    },
    textStyle : {
        fontSize : 30,
        textAlign: "center",
    },
    imageStyle: {
        width: 300,
        height:250,
        margin: 10,
        borderRadius : 50,
    }
})

export default CardDetail;
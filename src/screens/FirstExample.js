import React from "react";
import { StyleSheet, Text, View } from "react-native";


const FirstExample = () => {
    const myName = "Patel Gaurav";
    return (
        <View>
            <Text style={styles.textStyleOne}>Welcome to React Native App</Text>
            <Text style={styles.textStyleTwo}>We learn the react native course by H & B Computer Eduaction </Text>
            <Text style={styles.textStyleThree}>Hii , my name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     textStyleOne : {
        fontSize:40,
        color: "red",
        fontWeight :"bold",
        textAlign: "center"
     },
     textStyleTwo : {
        fontSize:30,
        color: "blue",
        textAlign: "center"
     },
     textStyleThree : {
        fontSize : 25,
        color: "chocolate",
        textAlign : "center"
     }

});

export default FirstExample;
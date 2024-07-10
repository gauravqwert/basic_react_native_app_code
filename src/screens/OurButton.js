import react from "react";
import { StyleSheet, View,Text, Button, Alert, TouchableOpacity, Image } from "react-native";

const OurButton  = () => {

    return (
        <View>
            <Text style={styles.textStyle}>Our Button Page</Text>
            <Button
                title ="Click Me" //it is compulsory if you can't write so button name not be shown
                onPress={() => Alert.alert('You clicked a button')}
            />

            <TouchableOpacity
             onPress={() => Alert.alert('You clicked a image or a text')}
             >
             <Image style={styles.imageStyle} source={require('../../assets/2.jpg')}/>
             <Text>Click Touchable Opacity Button</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle : {
        marginVertical:100,
        textAlign : "center",
        fontSize:30,
    },
   imageStyle :{
         width:200,
         height : 200
   }
})

export default OurButton;
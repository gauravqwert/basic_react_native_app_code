import react, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CheckBox from "expo-checkbox";
import AppLoading from "expo-app-loading";
const ContactPage = ({navigation}) => {
    const [userName,setUserName] = useState("");
    // console.log(userName);
    const [password,setPassword] = useState("");
    // console.log(password);
    const [agree, setAgree] = useState(false);

    console.log(userName,password);
     const submit =() =>{
        // return Alert.alert(userName,password);
        if(userName === "gaurav" && password === "patel"){
            Alert.alert(`Thank You ${userName}`);
            navigation.navigate('Home' , {myName : `${userName}`});
        }
        else{
            Alert.alert(`UserName and Password is not correct`);
        }
     }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>
                Login Form
            </Text>
            <Text style={styles.description}>You can reach us anytime via hnbinfo.com</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput style={styles.inputStyle} 
                    autoCapitalize="none"
                    autoCorrect = {false}
                    value={userName}
                    onChangeText={(actualData) => setUserName(actualData)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Enter Your Password</Text>
                <TextInput style={styles.inputStyle} 
                    autoCapitalize="none"
                    autoCorrect = {false}
                    secureTextEntry = {true}
                    value={password}
                    onChangeText={(actualData) => setPassword(actualData)}
                />
            </View>

            <View style={styles.wrapper}>
                <CheckBox
                    value={agree}
                    onValueChange={ () => setAgree(!agree)}
                    color={agree ? '#4630EB' : undefined}
                />
                <Text style={styles.wrapperText}>I have read and agreed with the hnb</Text>
            </View>
            <TouchableOpacity style={[styles.buttonStyle, {
                backgroundColor : agree ? "#4630EB" : "grey"
            }
            ]}
            disabled={!agree}
            onPress={() => submit()}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer : {
        height : "100%",
        paddingHorizontal : 30,
        paddingTop : 30,
        backgroundColor : "#fff",
    },
    mainHeader : {
        fontSize : 25,
        color : "#344055",
        fontWeight : "500",
        paddingTop : 20,
        paddingBottom : 15,
        textTransform : "capitalize",
        fontFamily : "monospace",
        fontWeight : "bold",
    },
    description : {
        fontSize : 20,
        color : "#7d7d7d",
        paddingBottom: 20,
        lineHeight : 25,
        fontFamily : "sans-serif",
    },
    inputContainer : {
        marginTop : 20,
    },
    labels : {
        fontSize : 18,
        color : "#7d7d7d",
        marginTop : 10,
        marginBottom : 5,
        lineHeight : 25,
        fontFamily : "sans-serif",
    },
    inputStyle : {
        borderWidth : 1,
        borderColor : "rgba(0,0,0,0.3)",
        paddingHorizontal : 15,
        paddingVertical : 7,
        borderRadius : 1,
        fontFamily : "Roboto",
        fontSize : 18,
    },
    wrapper : {
       paddingVertical : 15,
       display : "flex",
       justifyContent : "flex-start",
       gap : 20,
       flexDirection :"row",
    },
    wrapperText : {
        fontSize : 18,
        fontFamily : "Roboto",
        textTransform : "capitalize",
        fontStyle : "normal",
    },
    buttonStyle: {
        padding : 10,
        borderRadius : 5,
    },
    buttonText : {
        textAlign : "center",
        fontSize : 20,
        color : "#fff",
    }

})

export default ContactPage;
import react,{useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CountNumber = () => {

    const [counter,setCounter] = useState(0);
    return (
        <View>
            <Text style={styles.counter}> {counter} </Text>
            <View style={styles.button_group}>
                <TouchableOpacity 
                    style ={[styles.commonButton,styles.subtract]}
                    onPress={() => {
                        setCounter(counter + 10);
                        }}>
                    <Text style={styles.commonText}> + 10</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style ={[styles.commonButton,styles.reset]}
                    onPress={() => {
                        setCounter(0)
                    }}>
                    <Text style={styles.commonText}> Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style ={[styles.commonButton,styles.add]}
                    onPress={() => {
                       if(counter > 0) setCounter(counter - 10);
                    }}>
                    <Text style={styles.commonText}> - 10</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button_group:{
        width: "100%",
        display : "flex",
        alignItems :"center",
    },
    counter: {
        fontSize : 80,
        textAlign :"center",
        width : "100%",
        padding:20,
        marginTop: 60,
        marginBottom: 30,
    },
    commonButton : {
        alignItems :"center",
        justifyContent :"center",
        padding : 20,
        width : "70%",
        borderWidth :5,
        borderColor : "black",
        margin:20,
        backgroundColor : "black",
        borderRadius : 20,
    },
    commonText : {
        fontSize : 35,
        color: "white",
        fontWeight: "bold",
        fontFamily : "sans-serif",
    }
})

export default CountNumber;
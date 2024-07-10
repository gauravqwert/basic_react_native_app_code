import react from "react";
import { StyleSheet, Text, View } from "react-native";


const DemoCss = () => {
    return (
        <View style={styles.parentView}>
            <Text style={[styles.childText,styles.commonStyle]}>Box Model RN</Text>
            <Text style={[styles.childText2,styles.commonStyle]}>Box Model RN 2</Text>
            <Text style={[styles.childText3,styles.commonStyle]}>Box Model RN 3</Text>
        </View>
    );
};

const styles  = StyleSheet.create({
    parentView : {
        width : "95%",
        marginTop : 100,
        marginHorizontal:10,
        borderWidth : 3,
        borderColor : '#101820FF',
    },
    childText : {
        backgroundColor : "#97BC62FF",
        borderColor : '#2C5F2D',
        color : "#2C5F2D",
        marginTop :30,
    },
    childText2 : {
        backgroundColor : "#D48996FF",
        borderColor : "#A07855FF",
        color : "#A07855FF",
    },
    childText3 : {
        backgroundColor : "#9CC3D5FF",
        borderColor : "#0063B2FF",
        color : "#0063B2FF",
    },
    commonStyle : {
        fontSize:20,
        paddingVertical: 30,
        textAlign : "center",
        borderWidth: 5,
        marginBottom: 30,
        marginHorizontal : 50,
    }
})
export default DemoCss;
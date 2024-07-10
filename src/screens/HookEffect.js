import react, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";

const HookEffect = () => {
    const [myUserData,setMyUserData] = useState();
    const [isLoaded,setIsLoaded] = useState(true);

    const getUserData = async () => {
            try {
             const response = await fetch("https://jsonplaceholder.typicode.com/users");

           const mydata =await response.json();
           setMyUserData(mydata);
           setIsLoaded(false);
        //    console.log(mydata);
            } catch (error) {
                console.log(error);
            }
    }
    
    useEffect(() => {
        getUserData();
    },[]);
     return (
        <View style={styles.mainContainer}>
        {isLoaded ? (
            <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
        : (
            <View>

         
        <Text style={styles.mainHeader}>List of Students</Text>
            <FlatList 
                data = {myUserData}
                renderItem={({item}) => {
                    return (
                    <View style={styles.card}>
                    <View style={styles.imgContainer}>
                    <Image
                    style={styles.imgStyle}
                    resizeMode="cover"
                    source ={require('../../assets/student.jpg')}
                    />
                    </View>
                      <View>
                        <View style={styles.bioDataContainer}>
                        <Text style={styles.bioData}>Bio-Data</Text>
                        <Text style={styles.idNumber}>{item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
                        </View>
                        <View style={styles.mainContain}>
                        <Text style={styles.myName}>Name : {item.name}</Text>
                        <Text style={styles.myName}>Email : {item.email}</Text>
                        </View>
                      </View>
                    </View>
                    )
                }}
            />
        </View>
        )
        }
        </View>
     )
}

const styles = StyleSheet.create({
    loader : {
        minHeight : "100%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
    },
    mainContainer:{
        width : "100%",
        paddingTop : 50,
        backgroundColor : "#b696d7",
        display : "flex",
        justifyContent :"center",
        alignItems : "center",
        marginBottom : 30,
    },
    imgStyle : {
        width : "100%",
        height : 200,
    },
    mainContain : {
        backgroundColor : "#353535",    
    },
    myName : {
        color : "#fff",
        fontSize: 18,
        padding: 5,
    },
    card : {
        width : 300,
        backgroundColor : "#fff",
        borderRadius : 5,
        marginVertical : 20,
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
    },
    bioDataContainer: {
        width: "100%",
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        justifyContent :"space-between",
        backgroundColor : "#353535",
        paddingVertical : 10,
        fontFamily : "sans-serif",
        padding: 5,
    },
    idNumber : {
        fontSize : 20,
        color : "rgba(255,255,255,0.5)",
        fontFamily : "sans-serif",
    },
    bioData : {
        fontSize : 30,
        color : "#fff",
        fontFamily : "sans-serif",
    },
    mainHeader : {
        fontSize : 25,
        color : "#fff",
    }

})

export default HookEffect;
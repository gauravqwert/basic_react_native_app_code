import react from "react";
import { ScrollView, View } from "react-native";
import CardDetail from "../components/CardDetails";


const ImageFile = () => {
    return (
        <View> 
        <ScrollView>         
          <CardDetail textData = "This is my first Image" 
            imgScr ={require('../../assets/1.jpg')}
          />
          <CardDetail textData= "This is my second Image" imgScr = {require('../../assets/9.jpg')} />
          <CardDetail textData = "This is my Thiird Image" imgScr = {require('../../assets/12.jpg')}/>
          </ScrollView>
        </View>

    )
};

export default ImageFile;
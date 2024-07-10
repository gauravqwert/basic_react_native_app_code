// import libraries to create components
import React from "react";
import { Text,StyleSheet } from "react-native";

// create a component that return some jsx / simple function
const CustomComponent = () => {
  return (
    <Text style={styles.textStyle}> Hello World from my Custom Components 😊 😊 😂 🤣</Text>
  )
};

// create a stylesheet to style the component
const styles = StyleSheet.create({
    textStyle: {
      color : "red",
    }
})

// export the file, so that we can use it elsewhere in our app
export default CustomComponent;
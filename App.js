// import libraries to create components
import React from "react";
import { View } from "react-native";
import ContactPage from "./src/screens/ContactPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./src/screens/HomePage";



// create a component that return some jsx / simple function
const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
           <Stack.Screen name="Login" component={ContactPage} />
           <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
// export the file, so that we can use it elsewhere in our app
export default App;
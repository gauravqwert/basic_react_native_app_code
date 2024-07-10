import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const ImageBack = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../../assets/10.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Nature Beauty</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display : "flex",
    marginTop :50,
  },
  image: {
    display :"flex",
    justifyContent: 'center',
    alignItems : "center",
    height:500,
  },
  text: {
    color: 'white',
    fontSize: 38,
    lineHeight: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ImageBack;
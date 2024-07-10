import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

const FlatListDemo = () => {
  const names = [
    {
      name: "Heeramandi",
      year: "2024",
      Creator: "Sanjay Leela Bhansali",
      Genre: "Drama",
    },
    {
      name: "Money Heist",
      year: "2017",
      Creator: "Álex Pina",
      Genre: "Thriller",
    },
    {
      name: "Bridgerton",
      year: "2020",
      Creator: "Chris Van Dusen",
      Genre: "Drama",
    },
    {
      name: "Stranger Things",
      year: "2016",
      Creator: "The Duffer Brothers",
      Genre: "Sci-Fi",
    },
    {
      name: "My Demon",
      year: "2023",
      Creator: "Choi A-il",
      Genre: "Romance",
    },
    {
      name: "Avatar",
      year: "2024",
      Creator: "Gordon Cormier",
      Genre: "Fantasy",
    },
  ];
  return (
    <View>
      <Text style={styles.firstText}>Top 10 List of Netflix Series</Text>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
          return key.name;
        }}
        horizontal
         showsHorizontalScrollIndicator = {false}
        data={names}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyles}>
              <Text style={styles.textStyles}> Name : {item.name}</Text>
              <Text style={styles.textStyles}> Year : {item.year}</Text>
              <Text style={styles.textStyles}> Creator : {item.Creator}</Text>
              <Text style={styles.textStyles}> Genre : {item.Genre}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    textAlign: "center",
    padding: 5,
    margin: 20,
  },
  textStyles: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    padding: 5,
    backgroundColor: "#009688",
  },
  viewStyles: {
    padding: 5,
    margin: 20,
  },
  firstText: {
    margin:30,
    fontSize: 50,
    textAlign:"center",
    color : "red",
  },
});

export default FlatListDemo;

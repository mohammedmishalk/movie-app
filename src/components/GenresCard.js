import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const setWidth = (w) => (width / 100) * w;

function GenresCard({ genrename, active, onPress }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? "#525FE1" : "#ffff",
      }}
      activeOpacity={0.5}
      onPress={()=>onPress(genrename)}
    >
      <Text
        style={{
          ...styles.genreTextColor,
          color: active ? "#ffff" : "#000000",
        }}
      >
        {genrename}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(30),
  },
  genreTextColor: {
    fontSize: 13,
    color: "#525FE1",
  },
});

export default GenresCard;

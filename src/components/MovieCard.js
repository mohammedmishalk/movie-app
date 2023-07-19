import React from "react";
import { View, Text, StyleSheet, TouchableOpacity , ImageBackground} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MovieCard({ title, poster, language, vote, size,onPress }) {
  const baseURL = "https://image.tmdb.org/t/p/original";

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        style={{...styles.container, width :230 * size,height:340 * size}}
        resizeMode="cover"
        source={{ uri: `${baseURL}${poster}` }}
      >
        {/* Content inside the ImageBackground */}
        {/* <Text>Movie</Text> */}
      </ImageBackground>

      <View>
        <Text style={{...styles.movieTitle,width :230 * size}} numberOfLines={3}>
          {title}
        </Text>
        <View style={styles.movieSubTitle}>
          <Text>{language}</Text>
          <View style={styles.rowCenter}>
            <Ionicons
              name="heart"
              size={17 * size}
              color="red"
              style={{ marginRight: 5 }}
            />
            <Text>{vote}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#525FE1",
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    width: 230,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  movieSubTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});

MovieCard.defaultProps={
  size:1,
}


export default MovieCard;

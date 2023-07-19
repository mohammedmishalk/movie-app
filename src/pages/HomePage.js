import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
// import { ScrollView } from 'react-native-gesture-handler';
import axios from "../api/axios";
import requests from "../api/requests";
import MovieCard from "../components/MovieCard";
import GenresCard from "../components/GenresCard";
import ItemSeparator from "../components/ItemSeparator";
// const Genres = ["All", "Action", "Comedy", "Romace", "Horror", "Sci-Fi"];

export default function HomePage({navigation }) {
  const [activeGenre, setActiveGenre] = useState("All");
  const [Upcoming, setUpcoming] = useState([]);
  const [romace, setRomace] = useState([]);
  const [Horror, setHorror] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreRequest = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzJjMmJiOWUxMDljODViMjcxM2MzZDlmNDc2NTJmYiIsInN1YiI6IjYzYzdkZGFiMTQyZWYxMDBhMDRhM2ViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5dtGxHLBSpw3rRoTHdXXMncHUcd2nbbT3KsdSqfVslk',
          },
        });
  
        const genreNames = genreRequest.data.genres.map(genre => genre.name);
        const sortedGenres = ["All", ...genreNames];
  
        setGenres(sortedGenres);
  
        const request = await axios.get(requests.fetchActionMovies);
        setMovies(request.data.results);
        const Upcoming = await axios.get(requests.fetchTrending);
        setUpcoming(Upcoming.data.results);
        const romace = await axios.get(requests.fetchRomanceMovies);
        setRomace(romace.data.results);
        const horror = await axios.get(requests.fetchHorrorMovies);
        setHorror(horror.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
    {/* <ScrollView contentContainerStyle={styles.container}> */}
      <StatusBar style="auto" translucent={false} backgroundColor="#FFFFFF" />
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderTitle}>Now Playing</Text>
        <Text style={styles.subtitle}>View all</Text>
      </View>

      <View style={styles.genreListContainer}>
        <FlatList
          data={genres}
          horizontal
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <GenresCard
                genrename={item}
                active={item === activeGenre ? true : false}
                onPress={(genrename) => setActiveGenre(genrename)}
              />
            );
          }}
        />
      </View>
      <View>
        <FlatList
          data={movies}
          horizontal
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <MovieCard
                title={item.title}
                language={item.original_language}
                poster={item.poster_path}
                vote={item.vote_count}
                onPress={()=> navigation.navigate('movie',{movieId : item.id})}
              />
            );
          }}
        />
      </View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderTitle}>Upcoming </Text>
        <Text style={styles.subtitle}>View all</Text>
      </View>

      <View>
        <FlatList
          data={Upcoming}
          horizontal
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <MovieCard
                title={item.title}
                language={item.original_language}
                poster={item.poster_path}
                vote={item.vote_count}
                size={0.5}
                onPress={()=> navigation.navigate('movie',{movieId : item.id})}
              />
            );
          }}
        />
      </View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderTitle}>Romace  </Text>
        <Text style={styles.subtitle}>View all</Text>
      </View>
      <View>
        <FlatList
          data={romace}
          horizontal
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <MovieCard
                title={item.title}
                language={item.original_language}
                poster={item.poster_path}
                vote={item.vote_count}
                size={0.5}
                onPress={()=> navigation.navigate('movie',{movieId : item.id})}
              />
            );
          }}
        />
      </View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderTitle}>Horror  </Text>
        <Text style={styles.subtitle}>View all</Text>
      </View>
      <View>
        <FlatList
          data={Horror}
          horizontal
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <MovieCard
                title={item.title}
                language={item.original_language}
                poster={item.poster_path}
                vote={item.vote_count}
                size={0.5}
                onPress={()=> navigation.navigate('movie',{movieId : item.id})}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  HeaderTitle: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 13,
    color: "#525FE1",
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});

import React from "react";
import { FlatList } from "react-native";

import { IMovieShort } from "../types";
import MovieCard from "./MovieCard";

interface MoviesListProps {
  providedList: IMovieShort[];
  handleInfiteScrooll: () => void;
  loading?: boolean;
}

const MoviesList = ({ providedList, handleInfiteScrooll, loading }: MoviesListProps) => {
  return (
      <FlatList
        style={{ marginTop: 20, marginBottom: 100}}
        data={providedList}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item, index) => `${item.Title}_${index}`}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd >= 20 && !loading) {
            handleInfiteScrooll();
          }
        }}
      />
  );
};

export default MoviesList;


import React from "react";
import { FlatList } from "react-native";
import { Box, Text } from "native-base";

import { IMovieShort } from "../types";
import MovieCard from "./MovieCard";

interface MoviesListProps {
  providedList: IMovieShort[] | undefined;
}

const MoviesList = ({ providedList }: MoviesListProps) => {
  return (
    <>
      {providedList?.length === 0 && (
        <Box height="100%">
          <Text textAlign="center" margin="auto">
            No Movies Found
          </Text>
        </Box>
      )}
      <FlatList
      style={{marginTop: 20, marginBottom: 120}}
        data={providedList}
        renderItem={({ item }) => (
          <MovieCard movie={item}/>
        )}
        keyExtractor={(item, index) => `${item.Title}_${index}`}
        onEndReachedThreshold={0.1}
      />
    </>
  );
};

export default MoviesList;


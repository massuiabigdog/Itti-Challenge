import React, { useEffect, useState } from "react";
import { HStack, Text, Image, Box, Divider } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { IMovie } from "../types";
import { createRateStars } from "../utils";
import URLFactory from "../api/API";

function MovieDetails({ route, navigation }) {
  const { fullFilm }: { fullFilm: IMovie } = route.params;
  const [plot, setPlot] = useState<string>(fullFilm.Plot || '');
  useEffect(() => {
    navigation.setOptions({ title: `Details of: ${fullFilm.Title.substring(0, 20)}${fullFilm.Title.length > 24 && '...'}` });
    const handleGetFullFilm = async () => {
      try {
        const fetchedFilm = await new URLFactory()
          .getByImdbID(fullFilm.imdbID, true)
          .getSingleMovie();
        setPlot(fetchedFilm.Plot);
      } catch (error) {
        alert(error.message);
      }
    };
    handleGetFullFilm();
  }, []);


  const movieDetails = [
    {
      title: 'Year',
      value: fullFilm.Year
    },
    {
      title: 'Director',
      value: fullFilm.Director
    },
    {
      title: 'Actors',
      value: fullFilm.Actors
    },
    {
      title: 'Country',
      value: fullFilm.Country
    },

  ]

  return (
    <>
      <ScrollView>
        <Box bg='white' m={4} shadow='md' rounded='lg' p={4}>
          <Box m='auto' w='auto' textAlign='center' style={{ flex: 1, }}>
            <HStack mb={10} justifyContent="space-between">
              {fullFilm.Poster &&
                <Image fallbackElement={<Box w='100%' h={10} ><Ionicons style={{ margin: 'auto', alignSelf: 'center' }} name="camera" size={20} color="#e7e5e4" /></Box>
                } alt={fullFilm.Title} shadow='sm' size='2xl' h={400} m='auto' source={{
                  uri: fullFilm?.Poster
                }} />
              }
            </HStack>
            <Text color='primary.800' bold fontSize={'md'}>{fullFilm.Title}</Text>
            <Text color='gray.500' fontSize={'sm'}>{plot || fullFilm.Plot}</Text>
            <Box><Divider my='4' /></Box>
            <Box flexDir='row'>
              <Text mt={1} mr={2} color="gray.500">Rate:</Text>
              <Box ml='auto'>
                <Box flexDir='row'>
                  {createRateStars(parseFloat(fullFilm.imdbRating))}
                </Box>
                <Box ml='auto' flexDir='row'>
                  <Text fontSize={'lg'} bold color="gray.700">{fullFilm.imdbRating}</Text>
                  <Text mt='1' ml='1' fontSize={'sm'} color="gray.500">/10 rate</Text>
                </Box>
              </Box>
            </Box>
            <Box><Divider my='4' /></Box>
            {movieDetails.map((detail, index) =>
              <Box key={index}>
                <HStack>
                  <Text mr={2} color="gray.500">{detail.title}:</Text>
                  <Text ml='auto' color="gray.800" fontSize='sm'>{detail.value}</Text>
                </HStack>
                <Box><Divider my='4' /></Box>
              </Box>
            )}
          </Box>
        </Box>
      </ScrollView>
    </>
  );
}

export default MovieDetails;

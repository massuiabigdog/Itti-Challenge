import { Box, HStack, Text, Image, VStack, Divider } from "native-base";
import { IMovie, IMovieShort } from "../types";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import URLFactory from "../api/API";
import { createRateStars } from "../utils";
import { navigate } from "../navigation/navigationService";

const MovieCard = ({ movie }: { movie: IMovieShort }) => {

  const [fullFilm, setFullFilm] = useState<IMovie>({} as IMovie);
  useEffect(() => {
    const handleGetFullFilm = async () => {
      try {
        const fetchedFilm = await new URLFactory()
          .getByImdbID(movie.imdbID)
          .getSingleMovie();
        setFullFilm(fetchedFilm);
      } catch (error) {
        alert(error.message);
      }
    };
    handleGetFullFilm();
  }, [movie.imdbID]);

  const mainContent = <>
    <HStack justifyContent="space-between">
      {movie.Poster &&
        <Image fallbackElement={<></>} alt={movie.Title} mr={4} shadow='sm' size='xl' h='150' w='100' bg="green.500" source={{
          uri: movie?.Poster
        }} />
      }
      <Box m='auto' w='auto' maxW='70%' textAlign='center' style={{ flex: 1, }}>
        <Text color='gray.800' fontSize={'md'}>{movie.Title}</Text>
        <Text color='gray.500' fontSize={'sm'}>{fullFilm.Plot}</Text>
        <Divider my={2} />
        <Box flexDir='row'>
          <Text fontSize={'lg'} bold color="gray.700">{fullFilm.imdbRating}</Text>
          <Text mt='1' ml='1' fontSize={'sm'} color="gray.500">/10 rate</Text>
        </Box>
        <Box flexDir='row'>
          {createRateStars(parseFloat(fullFilm.imdbRating))}
        </Box>
        <Divider my={2} />
        <HStack>
          <Text mt={2} mr={2} color="gray.500">year:</Text>
          <Text color="red.400" fontWeight='bold' fontSize='xl'>{movie.Year}</Text>
        </HStack>
      </Box>
    </HStack>
  </>

  return (
    <>
      <Box borderX="1px" bg='white' m='4' mt='2' mb='4' p='4' shadow='1' borderRadius="lg">
        <VStack space={4} >
          <TouchableOpacity onPress={() => navigate('MovieDetail', { fullFilm: fullFilm })}>
            {mainContent}
          </TouchableOpacity>
        </VStack>
      </Box>
    </>
  );
}

export default MovieCard;
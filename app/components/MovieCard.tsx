import { Box, HStack, Text, Image, VStack } from "native-base";
import { IMovieShort } from "../types";
import { TouchableOpacity } from "react-native";

const MovieCard = ({ movie }: { movie: IMovieShort }) => {

    const mainContent = <>
      <HStack justifyContent="space-between">
        {
          <Image rounded='md' alt={movie.Title} mr={4} shadow='sm' size='xl' bg="green.500" source={{
            uri: movie.Poster
          }} />
        }
        <Box m='auto' w='auto' maxW='50%' textAlign='center' style={{ flex: 1, }}>
          <Text color='gray.800' fontSize={'md'}>{movie.Title}</Text>
          <HStack>
            <Text mt={2} mr={2} color="gray.500">year:</Text>
            <Text color="red.400" fontWeight='bold' fontSize='xl'>{movie.Year}</Text>
          </HStack>
  
        </Box>
  
      </HStack>
    </>
  
    return (
      <>
        <Box borderX="1px" bg='white' m='4' mt='2' mb='4' shadow='1' borderRadius="lg">
          <VStack space={4} >
            <TouchableOpacity onPress={() => console.log('press')}>
              {mainContent}
            </TouchableOpacity>
          </VStack>
        </Box>
      </>
    );
  }

  export default MovieCard;
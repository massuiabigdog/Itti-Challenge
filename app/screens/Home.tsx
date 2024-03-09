import React, { useEffect, useState } from "react";
import { Box, Spinner, Text } from "native-base";
import { useSelector, useDispatch } from "react-redux";

import searchFilmByTitleAndYear from "../redux/films/actions";
import useDebounce from "../hooks";
import { MoviesList, SearchBar } from "../components";
import { IMovie } from "../types";


function Home() {
  const [searchInput, setSearchInput] = useState({
    title: "",
    year: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  const films = useSelector((store: { films: { films: IMovie[], searchError?: string } }) => store.films);
  const loading = useSelector((store: { films: { searchLoading: boolean } }) => store.films.searchLoading);
  const totalResults = useSelector((store: { films: { totalResults: number } }) => store.films.totalResults);
  const dispatch = useDispatch();
  useEffect(() => {
    setSearchResults([...searchResults, ...films.films])
  }, [films.films]);


  const debouncedSearchInput = useDebounce(() => {
    if (searchInput.title) {
      setSearchResults([]);
      dispatch<any>(searchFilmByTitleAndYear(searchInput.title, searchInput?.year, 1));
      if (page !== 1) setPage(1);
    }
  }, [searchInput], 800);

  useEffect(() => {
    setSearchResults([]);
    debouncedSearchInput;
  }, [searchInput]);

  const handleInfiteScrooll = () => {
    const resultByPage = 10;
    const maxPageToFetch = Math.ceil(totalResults / resultByPage);
    if (page >= maxPageToFetch) return;
    dispatch<any>(searchFilmByTitleAndYear(searchInput.title, searchInput?.year, page + 1));
    setPage(page + 1);
  }
  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={(e) => setSearchInput(e)} />
      {films.searchError && searchInput.title && <Box mt={0} bg={"danger.500"} width='100%' h={10} pt={0} > <Text display='block' color='white' py={2} mt={-5} textAlign='center' m='auto'>{films.searchError}</Text></Box>}
      {loading && <Box mt={0} bg={"gray.100"} width='100%' h={12} > <Spinner mt={-1} pb={4} color={'purple.500'} /></Box>}
      <Box mt={-5}>
        {!searchInput.title ? <Box m='auto' mt={10}>Search for a movie</Box> : <MoviesList loading={loading} handleInfiteScrooll={() => handleInfiteScrooll()} providedList={searchResults} />}
      </Box>
    </>
  );
}

export default Home;



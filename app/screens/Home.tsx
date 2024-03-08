import React, { useState } from "react";
import { Spinner, Box } from "native-base";
import { MoviesList, SearchBar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import searchFilmByTitleAndYear from "../redux/films/actions";
import useDebounce from "../hooks";


function Home() {


  const [searchInput, setSearchInput] = useState({
    title: "",
    year: "",
  });
  // @ts-ignore
  const films = useSelector((store) => store.films);
  // @ts-ignore
  const loading = useSelector((store) => store.films.searchLoading);
  const dispatch = useDispatch();
  useDebounce(() => {
    if (searchInput.title) dispatch<any>(searchFilmByTitleAndYear(searchInput.title, searchInput?.year));
  }, [searchInput], 800
  );

  return (
    <>
      <Box>
        <SearchBar searchInput={searchInput} setSearchInput={(e) => setSearchInput(e)} />
        {!searchInput.title ? <Box m='auto' mt={10}>Search for a movie</Box> : <MoviesList providedList={films.films} />}
        {loading && <Spinner h='100%' m='auto' />}
      </Box>
    </>
  );
}

export default Home;



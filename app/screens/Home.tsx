import React, { useState } from "react";
import { Text, Spinner } from "native-base";
import { MoviesList } from "../components";


function Home() {

  const [errorAPI] = useState(null);
  const [list, setList] = useState<any>();
  const loading = false;
  return (
    <>
      {loading ? (
        <Spinner margin="auto" />
      ) : (
        <>
          {errorAPI ? (
            <Text>Error fetching data. Please try again later.</Text>
          ) : (
            <MoviesList providedList={list} />
          )}
        </>
      )}
    </>
  );
}

export default Home;

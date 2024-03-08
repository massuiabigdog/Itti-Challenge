import React, { useState } from "react";
import { MoviesList } from "../components";
import { IMovie } from "../types";


function MovieDetails() {

  const [historyList] = useState<IMovie[]>();


  return (
    <>
      <MoviesList providedList={historyList} />
    </>
  );
}

export default MovieDetails;

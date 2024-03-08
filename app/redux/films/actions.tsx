import URLFactory from "../../api/API";

const searchFilmByTitleAndYear = (title, year) => async (dispatch) => {
  dispatch({ type: "SEARCH_SENT" });
  try {
    const { Search, totalResults } = await new URLFactory()
      .searchByTitleAndYear(title, year)
      .fetch();
    dispatch({
      type: "SEARCH_FULFILLED",
      payload: { films: Search, totalResults },
    });
  } catch (error) {
    console.log(error.message); // Add console.log(
    dispatch({ type: "SEARCH_REJECTED", payload: error.message });
  }
};

export default searchFilmByTitleAndYear;

import URLFactory from "../../api/API";

const searchFilmByTitleAndYear = (title, year, page) => async (dispatch) => {
  dispatch({ type: "SEARCH_SENT" });
  try {
    const { Search, totalResults } = await new URLFactory()
      .searchByTitleAndYear(title, year, page)
      .fetch();
    dispatch({
      type: "SEARCH_FULFILLED",
      payload: { films: Search, totalResults },
    });
  } catch (error) {
    dispatch({ type: "SEARCH_REJECTED", payload: error.message });
  }
};

export default searchFilmByTitleAndYear;

const initialState = {
  movies: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

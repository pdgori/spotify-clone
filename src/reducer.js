export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  token: null,
  //token:
  //    "BQASZPUSaqMgcskgQ-y68zhQNLVjFNIlBvWYIyoj-cBvm5xJjBxYU_V4L9bqCn59t-jPC7xXt4fNzg2vtz7CSaag0NQjQrv79y8PM7bJEU5IBmWjjMbPgZT_TAnb-fdcSopioCaGaQnOj3LXB5EQeFXgF_OhyQVLBA",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;

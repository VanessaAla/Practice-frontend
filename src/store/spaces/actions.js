export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";

export const fetchSpacesSuccess = (spaces) => ({
  type: FETCH_SPACES_SUCCESS,
  payload: spaces,
});

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    //const spacesCount = getState().spaces.length;
    //dispatch(fetchSpacesSuccess());
  };
};

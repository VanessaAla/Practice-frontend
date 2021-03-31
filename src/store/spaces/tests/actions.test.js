import { FETCH_SPACES_SUCCESS, fetchSpacesSuccess } from "../actions";

describe("#fetchSpacesSuccess", () => {
  describe("if given an array of spaces", () => {
    test("should return an action object", () => {
      // test data simulating spaces
      const spaces = [{}, {}];
      // build action we expect to get back
      const expected = {
        type: FETCH_SPACES_SUCCESS,
        payload: spaces,
      };
      // call function
      const action = fetchSpacesSuccess(spaces);
      // do assertion on function return
      expect(action).toEqual(expected);
    });
    //test => action.payload should have the same length as the argument given
    /*test("the payload of whats returned should have the same length as the spaces array", () => {
      const action = fetchSpacesSuccess(spaces);
      expect(action.payload).toHaveLength(spaces.length);*/
  });
});

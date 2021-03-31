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
  });
});

import axios from "axios";
import {
  FETCH_SPACES_SUCCESS,
  fetchSpacesSuccess,
  fetchSpaces,
} from "../actions";

// Then, we tell jest that we want this module/package mocked.
jest.mock("axios");

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
//});

describe("#fetchSpaces", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_SPACES_SUCCESS", async () => {
      const fakeSpaces = [{}, {}];
      // Inside our test case we can define what we want this mock to return:
      const response = { data: { spaces: { rows: fakeSpaces } } };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      // We can create an mock function like this:
      const dispatch = jest.fn();

      //Mock functions allow us to check if they were called on our assertions.
      //we define our mock function like:
      const getState = jest.fn().mockReturnValueOnce({ spaces: [] });
      await fetchSpaces()(dispatch, getState);
      // get more specific:
      expect(dispatch).toHaveBeenCalledWith(fetchSpacesSuccess(fakeSpaces));
      expect(getState).toHaveBeenCalledTimes(1);
    });
  });
});

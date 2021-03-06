import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  SPACE_UPDATED,
  STORY_POST_SUCCESS,
  STORY_DELETE_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log("LOGIN SUCCESS", { ...state, ...action.payload });
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case SPACE_UPDATED:
      return {
        ...state,
        space: { ...action.payload, stories: state.space.stories },
      };

    case STORY_POST_SUCCESS:
      return {
        ...state,
        space: {
          ...state.space,
          stories: [...state.space.stories, action.payload],
        },
      };

    case STORY_DELETE_SUCCESS:
      const storyId = action.payload;
      const newStories = state.space.stories.filter(
        (story) => story.id !== storyId
      );
      return {
        ...state,
        space: {
          ...state.space,
          stories: newStories,
        },
      };

    default:
      return state;
  }
};

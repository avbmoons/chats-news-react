import { GET_ARTICLES_REQUEST } from "../actions";
import { articlesReducer } from "../reducer";
import { initialState } from "../reducer";
import { REQUEST_STATUS } from "../../../utils/constants";

describe("return correct state after action", () => {
  it("return correct state after request", () => {
    const expected = {
      ...initialState,
      request: {
        error: "",
        status: REQUEST_STATUS.PENDING,
      },
    };
    const received = articlesReducer(initialState, GET_ARTICLES_REQUEST);

    expect(expected).toEqual(received);
  });
});

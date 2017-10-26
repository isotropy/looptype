import { updateState } from "redux-jetpack";

export async function searchInput(input) {
  updateState("input", state => ({ ...state, loopSearchInput: input }));
}

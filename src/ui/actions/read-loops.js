import { updateState } from "redux-jetpack";
import * as readLoopsAPI from "../../server/read-loops";

export async function getPopularLoops() {
  const loops = await readLoopsAPI.getPopularLoops();

  updateState("loops", state => loops);
}

export async function getLoop(loopId) {
  const loop = await readLoopsAPI.getLoop(loopId);

  updateState("loops", state => loop);
}

export async function searchLoops(query) {
  const loop = await readLoopsAPI.searchLoops(query);

  updateState("loops", state => loop);
}

export async function getCategorizedLoops(categories) {
  const loops = await readLoopsAPI.getCategorizedLoops(categories);

  updateState("loops", state => loops);
}

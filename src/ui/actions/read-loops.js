import { updateState } from "redux-jetpack";
import * as readLoopsAPI from "../../server/read-loops";

export async function getLoopList() {
  const loops = await readLoopsAPI.getPopularLoops();

  updateState("loops", state => loops);
}

export async function getLoop(loopId) {
  const loop = await readLoopsAPI.getLoop(loopId);

  updateState("loops", state => loop);
}

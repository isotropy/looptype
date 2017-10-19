import { updateState } from "redux-jetpack";
import * as readLoopsAPI from "../../server/read-loops";

export async function getLoopList() {
  const loops = await readLoopsAPI.getPopularLoops();

  updateState("loops", state => loops);
}

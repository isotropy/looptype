import db from "./db";

export async function getPopularLoops() {
  return db.loops;
}

export async function getLoop(loopId) {
  const loop = db.loops.find(loop => loop.id === loopId);
  return loop;
}

import db from "./db";

export async function getPopularLoops() {
  return db.loops;
}

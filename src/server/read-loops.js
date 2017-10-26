import db from "./db";

export async function getPopularLoops() {
  return db.loops;
}

export async function getLoop(loopId) {
  const loop = db.loops.find(loop => loop.id === loopId);
  return loop;
}

export async function searchLoops(query) {
  const loops = db.loops.filter(
    loop => loop.name.includes(query) || loop.description.includes(query)
  );
  return loops;
}

export async function getCategorizedLoops(categories) {
  const loops = db.loops.filter(loop => loop.category === categories);
  return loops;
}

export const w = {
  exists: 1,
  name: "wall",
};

export const n = {
  exists: 1,
  name: "next",
};

export const S = {
  exists: 1,
  name: "smorc",
};

export const A = {
  exists: 2,
  name: "afa",
};

export const K = {
  exists: 3,
  name: "k7",
};

export const M = {
  exists: 3,
  name: "mmd",
};

export const F = {
  exists: 1,
  name: "sta",
};

export const initMap = [
  [n, S, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [w, w, w, w, w, w, w, w, w, w, 0],
  [0, 0, 0, w, 0, w, K, 0, F, w, 0],
  [F, 0, S, 0, 0, w, 0, 0, 0, w, 0],
  [w, 0, w, w, 0, w, w, w, S, w, 0],
  [0, 0, 0, w, 0, S, 0, 0, 0, w, 0],
  [F, 0, 0, w, 0, w, w, w, w, w, 0],
  [w, 0, w, w, 0, 0, 0, 0, 0, 0, 0],
  [0, S, 0, w, w, 0, w, w, w, 0, w],
  [0, 0, 0, w, 0, 0, 0, w, 0, S, 0],
  [A, 0, 0, w, 0, 0, 0, w, F, 0, M],
];

export const initMap2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, w, w, 0, 0, 0, 0, 0, w, w],
  [0, w, w, w, w, w, 0, w, w, w, w],
  [0, w, 0, 0, w, 0, 0, 0, w, 0, 0],
  [0, w, 0, 0, w, 0, 0, 0, w, 0, 0],
  [0, w, w, w, w, 0, 0, 0, w, w, w],
  [0, w, 0, 0, w, 0, 0, 0, w, 0, 0],
  [0, w, 0, 0, w, 0, 0, 0, w, 0, 0],
  [0, w, w, w, w, 0, 0, 0, w, w, w],
  [0, w, 0, 0, w, 0, 0, 0, w, 0, 0],
  [0, w, 0, 0, w, 0, 0, 0, w, 0, 0],
];

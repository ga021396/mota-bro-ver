export const w = {
  exists: 1,
  name: "wall",
};

export const n2 = {
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
  exists: 4,
  name: "mmd",
};

export const F = {
  exists: 1,
  name: "sta",
};

export const initMap = [
  [n2, S, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

const b1 = {
  exists: 1,
  name: "backTo1",
};

const n3 = {
  exists: 1,
  name: "nextTo3",
};

const y = {
  exists: 2,
  name: "yang",
};

const mi = {
  exists: 3,
  name: "limi",
};

const t = {
  exists: 1,
  name: "tea",
};

const j = {
  exists: 1,
  name: "jail",
};

const o = {
  exists: 2,
  name: "oan",
};

const te = {
  exists: 2,
  name: "ticket",
};

export const initMap2 = [
  [b1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, w, w, 0, 0, y, 0, 0, w, w],
  [0, w, w, w, w, w, 0, w, w, w, w],
  [0, w, mi, 0, w, 0, 0, 0, w, 0, t],
  [0, w, 0, 0, 0, 0, 0, 0, j, 0, 0],
  [0, w, w, w, w, 0, 0, 0, w, w, w],
  [0, w, F, F, w, 0, 0, 0, w, F, F],
  [0, w, F, F, 0, 0, 0, 0, 0, F, F],
  [0, w, w, w, w, 0, 0, 0, w, w, w],
  [0, w, 0, 0, w, 0, 0, 0, w, 0, 0],
  [n3, w, o, 0, 0, 0, 0, 0, 0, 0, te],
];

const b2 = {
  exists: 1,
  name: "backTo2",
};

const n4 = {
  exists: 1,
  name: "nextTo4",
};

const b = {
  exists: 1,
  name: "bird",
};

const bu = {
  exists: 4,
  name: "but",
};

const ma = {
  exists: 1,
  name: "mao",
};

const na = {
  exists: 2,
  name: "nai",
};

const ch = {
  exists: 4,
  name: "chick",
};

const ET = {
  exists: 3,
  name: "ET",
};

const da = {
  exists: 2,
  name: "da",
};

const fu = {
  exists: 2,
  name: "samfu",
};

const li = {
  exists: 2,
  name: "lin",
};

const d = {
  exists: 2,
  name: "do",
};

export const initMap3Sam = [
  [b2, w, w, w, 0, w, w, w, 0, 0, n4],
  [0, w, 0, 0, b, w, 0, w, 0, 0, 0],
  [0, w, w, w, 0, w, w, w, 0, 0, 0],
  [0, b, da, w, b, 0, na, w, 0, 0, 0],
  [0, w, w, w, 0, w, w, w, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, b, 0, 0, 0],
  [0, 0, 0, 0, w, w, w, 0, w, w, w],
  [0, 0, 0, b, 0, 0, w, 0, w, 0, w],
  [b, b, b, 0, w, w, w, 0, w, 0, w],
  [b, b, b, 0, w, bu, 0, b, w, 0, w],
  [ET, b, b, 0, w, w, w, 0, w, w, w],
];

const fw = {
  exists: 1,
  name: "fw",
};

export const initMap3Lee = [
  [b2, w, w, w, 0, w, w, w, 0, 0, n4],
  [0, w, 0, 0, b, w, 0, w, 0, 0, 0],
  [0, w, w, w, 0, w, w, w, 0, 0, 0],
  [0, b, da, w, b, 0, fw, w, 0, 0, 0],
  [0, w, w, w, 0, w, w, w, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, b, 0, 0, 0],
  [0, 0, 0, 0, w, w, w, 0, w, w, w],
  [0, 0, 0, b, 0, 0, w, 0, w, 0, w],
  [b, b, b, 0, w, w, w, 0, w, 0, w],
  [b, b, b, 0, w, bu, 0, b, w, 0, w],
  [ET, b, b, 0, w, w, w, 0, w, w, w],
];

export const initMap3Arwei = [
  [b2, w, b, b, ma, b, b, w, w, w, n4],
  [0, w, 0, b, b, b, 0, b, da, w, 0],
  [0, w, 0, b, b, b, 0, b, 0, w, 0],
  [0, w, 0, 0, 0, 0, 0, w, w, w, 0],
  [0, w, 0, w, w, w, 0, w, 0, b, 0],
  [0, w, 0, w, 0, b, 0, w, fu, b, 0],
  [0, w, 0, w, li, b, 0, w, w, w, 0],
  [0, 0, 0, w, w, w, 0, 0, 0, 0, 0],
  [0, 0, 0, w, 0, w, 0, 0, 0, 0, 0],
  [0, 0, 0, w, 0, w, 0, 0, 0, 0, 0],
  [0, 0, 0, w, w, w, 0, 0, 0, 0, 0],
];

export const initMap3Rb = [
  [b2, w, 0, b, b, d, w, 0, 0, 0, n4],
  [0, w, 0, b, b, b, w, 0, 0, 0, 0],
  [0, w, 0, b, b, b, w, 0, 0, 0, 0],
  [0, w, 0, 0, 0, 0, w, 0, 0, 0, 0],
  [0, w, 0, 0, 0, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, w, w, w, 0, 0, 0, w, w, w],
  [0, 0, b, ch, w, 0, 0, 0, b, fu, w],
  [0, 0, w, w, w, 0, 0, 0, w, w, w],
  [0, 0, w, da, b, 0, 0, 0, w, 0, 0],
  [0, 0, w, w, w, 0, 0, 0, w, w, w],
];

const k = {
  exists: 1,
  name: "key",
};

const dr = {
  exists: 1,
  name: "door",
};

const or = {
  exists: 2,
  name: "orange",
};

const f = {
  exists: 3,
  name: "feng",
};

const bo = {
  exists: 2,
  name: "bo",
};

export const initMap3Butt = [
  [b2, 0, 0, 0, w, 0, dr, 0, 0, 0, n4],
  [0, 0, 0, 0, w, or, w, 0, 0, 0, 0],
  [w, w, w, 0, w, w, w, w, 0, 0, 0],
  [k, b, w, 0, 0, 0, w, 0, 0, 0, 0],
  [b, b, w, 0, 0, b, w, 0, 0, 0, 0],
  [0, 0, w, 0, w, 0, 0, 0, 0, 0, 0],
  [0, 0, w, 0, w, 0, 0, w, 0, w, 0],
  [0, 0, w, 0, w, 0, 0, w, 0, w, 0],
  [0, 0, 0, b, w, 0, 0, w, w, w, w],
  [0, 0, 0, 0, w, 0, 0, b, 0, w, bo],
  [f, 0, 0, 0, w, 0, 0, b, 0, dr, 0],
];

const b3 = {
  exists: 1,
  name: "backTo3",
};

const n5 = {
  exists: 1,
  name: "nextTo5",
};

const nl = {
  exists: 3,
  name: "nl",
};

export const initMap4 = [
  [b, b, b, b, w, n5, w, b, b, b, b],
  [b, b, b, b, w, 0, w, b, b, b, b],
  [b, b, b, b, w, 0, w, b, b, b, b],
  [b, b, b, b, w, nl, w, b, b, b, b],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [S, S, S, S, w, 0, w, S, S, S, S],
  [S, S, S, S, w, 0, w, S, S, S, S],
  [S, S, S, S, w, 0, w, S, S, S, S],
  [S, S, S, S, w, b3, w, S, S, S, S],
];

const ni = {
  exists: 3,
  name: "ani",
};

const ap = {
  exists: 2,
  name: "apple",
};

const x = {
  exists: 1,
  name: "xio8",
};

const ds = {
  exists: 1,
  name: "ds3",
};

const ka = {
  exists: 3,
  name: "kamoi",
};

const sn = {
  exists: 3,
  name: "snow",
};

export const initMap5Sam = [
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [ka, 0, 0, dr, 0, 0, 0, dr, 0, 0, sn],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, k, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5SamHid = [
  [w, w, w, w, 0, bu, 0, w, w, w, w],
  [ka, dr, dr, dr, 0, 0, 0, dr, dr, dr, sn],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, S, 0, S, w, w, w, w],
  [w, w, w, w, S, 0, S, w, w, w, w],
  [w, w, w, w, S, 0, S, w, w, w, w],
  [w, w, w, w, S, 0, S, w, w, w, w],
  [w, w, w, w, S, 0, S, w, w, w, w],
  [w, w, w, w, S, 0, S, w, w, w, w],
  [w, w, w, w, S, 0, S, w, w, w, w],
];

export const initMap5Rb = [
  [w, w, w, w, 0, ni, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, ap, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5RbHid = [
  [w, w, w, w, ch, 0, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, w, ch, w, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
  [w, w, w, w, ch, ch, ch, w, w, w, w],
];

export const initMap5Arwei = [
  [w, w, w, w, 0, x, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, ds, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

const n6 = {
  exists: 1,
  name: "nextTo6",
};

export const initMap5Lee = [
  [w, w, w, w, 0, n6, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

const sa = {
  exists: 3,
  name: "sam-bu",
};

export const initMap5Butt = [
  [w, w, w, w, 0, sa, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5ButtHid = [
  [w, w, b, dr, 0, n6, 0, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
  [w, w, b, dr, S, 0, S, dr, b, w, w],
];

export const initMap4But = [
  [0, 0, 0, 0, w, n5, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [0, 0, 0, 0, w, 0, w, 0, 0, 0, 0],
  [S, S, S, S, w, 0, w, S, S, S, S],
  [S, S, S, S, w, 0, w, S, S, S, S],
  [S, S, S, S, w, 0, w, S, S, S, S],
  [S, S, S, S, w, 0, w, S, S, S, S],
];

const sh = {
  exists: 2,
  name: "shan",
};

const rb = {
  exists: 3,
  name: "rb-l",
};

const sam = {
  exists: 3,
  name: "sam-l",
};

const wei = {
  exists: 3,
  name: "wei-l",
};

export const initMapLocking3 = [
  [b2, w, sh, b, b, 0, w, 0, 0, 0, n4],
  [0, w, b, b, b, 0, w, 0, 0, 0, 0],
  [0, w, b, b, b, 0, w, 0, 0, 0, 0],
  [0, w, 0, 0, 0, 0, w, 0, 0, 0, 0],
  [0, w, 0, 0, 0, 0, 0, 0, w, dr, w],
  [0, w, 0, w, w, w, b, b, w, 0, w],
  [0, w, 0, w, wei, w, 0, 0, w, rb, w],
  [0, w, 0, w, 0, w, 0, 0, w, w, w],
  [0, 0, 0, w, 0, w, 0, 0, dr, sam, w],
  [0, 0, 0, w, 0, dr, 0, 0, dr, 0, w],
  [0, 0, 0, w, w, w, 0, 0, w, w, w],
];

const mic = { exists: 1, name: "mic" };

const mon = { exists: 1, name: "mon" };

export const initMap5Locking = [
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5LockingFull = [
  [w, w, w, w, 0, sam, 0, w, w, w, w],
  [w, w, w, w, rb, 0, wei, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, mon, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5LockingRBwei = [
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, rb, 0, wei, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5LockingRBsam = [
  [w, w, w, w, 0, sam, 0, w, w, w, w],
  [w, w, w, w, rb, 0, 0, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5LockingSamWei = [
  [w, w, w, w, 0, sam, 0, w, w, w, w],
  [w, w, w, w, 0, 0, wei, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5LockingSam = [
  [w, w, w, w, 0, sam, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5LockingWei = [
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, wei, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

export const initMap5LockingRB = [
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, rb, 0, 0, w, w, w, w],
  [w, w, w, w, 0, mic, 0, w, w, w, w],
  [w, w, w, w, w, 0, w, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
  [w, w, w, w, 0, 0, 0, w, w, w, w],
];

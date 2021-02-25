export type Map = Object[][];

export type Object = {
  exists: boolean;
  fn?: () => void;
  message?: string;
  name?: string;
};

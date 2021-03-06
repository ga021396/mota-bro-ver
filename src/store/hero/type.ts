export type Hero = {
  x: number;
  y: number;
  atk: number;
  def: number;
  hp: number;
  name: string;
  des: string;
  money: number;
  key: number;
  end?: boolean;
  hiddenEnd?: boolean;
  letter?: number;
  auth?: boolean;
  save?: {
    rb?: boolean;
    sam?: boolean;
    wei?: boolean;
  };
};

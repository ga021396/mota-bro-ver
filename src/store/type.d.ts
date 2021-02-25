import { StateType, ActionType } from "typesafe-actions";

declare module "typesafe-actions" {
  export type Store = ReturnType<typeof import(".").default>;
  export type RootState = StateType<typeof import("./rootReducer").default>;
  export type RootAction = ActionType<typeof import("./rootAction").default>;
}

import { Dispatch } from "redux";
import { createAsyncAction, RootAction, RootState } from "typesafe-actions";
import { Map, Object } from "./type";

export const fetchAsync = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE1_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchAsync2 = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE2_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchAsync3 = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE3_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchAsync4 = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE4_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchAsync5 = createAsyncAction(
  "FETCH_REQUEST",
  "FETCH_SCENE5_SUCCESS",
  "FETCH_FAILURE"
)<undefined, Map, Error>();

export const fetchScene1 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync.success(map));
};

export const fetchScene2 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync2.success(map));
};

export const fetchScene3 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync3.success(map));
};

export const fetchScene4 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync4.success(map));
};

export const fetchScene5 = (map: Map): any => async (
  dispatch: Dispatch<RootAction>,
  getState: () => RootState
) => {
  dispatch(fetchAsync5.success(map));
};

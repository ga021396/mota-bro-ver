import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import "./scene5.scss";
import Scene1EventHandler from "../../hooks/scene1EventHandler";
import { getScene5 } from "../../store/scene1/selectors";
import { Map } from "../../store/scene1/type";
import { fetchScene5 } from "../../store/scene1/action";
import {
  initMap5Sam,
  initMap5Arwei,
  initMap5Rb,
  initMap5RbHid,
  initMap5SamHid,
  initMap5Lee,
  initMap5Butt,
  initMap5ButtHid,
  initMap5Locking,
  initMap5LockingFull,
  initMap5LockingRBwei,
  initMap5LockingRBsam,
  initMap5LockingSamWei,
  initMap5LockingSam,
  initMap5LockingWei,
  initMap5LockingRB,
} from "../../store/scene1/data";

function Scene5() {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;
  const scene5 = useSelector(getScene5) as Map;
  Scene1EventHandler(scene5);

  const full = hero?.save?.rb && hero?.save?.sam && hero?.save?.wei;
  const samRb = hero?.save?.rb && hero?.save?.sam;
  const samwei = hero?.save?.sam && hero?.save?.wei;
  const rbWei = hero?.save?.rb && hero?.save?.wei;
  const rb = hero?.save?.rb;
  const wei = hero?.save?.wei;
  const sam = hero?.save?.sam;

  useEffect(() => {
    if (scene5.length <= 0) {
      switch (hero.name) {
        case "sam":
          if (hero.hiddenEnd) {
            dispatch(fetchScene5(initMap5SamHid as Map));
          } else dispatch(fetchScene5(initMap5Sam as Map));
          return;
        case "arwei":
          dispatch(fetchScene5(initMap5Arwei as Map));
          return;
        case "rb":
          if (hero.hiddenEnd) {
            dispatch(fetchScene5(initMap5RbHid as Map));
          } else dispatch(fetchScene5(initMap5Rb as Map));
          return;
        case "lee":
          dispatch(fetchScene5(initMap5Lee as Map));
          return;
        case "butt":
          if (hero.hiddenEnd) {
            dispatch(fetchScene5(initMap5ButtHid as Map));
          } else dispatch(fetchScene5(initMap5Butt as Map));
          return;
        case "lock1ng":
          if (full) {
            dispatch(fetchScene5(initMap5LockingFull as Map));
          } else if (samRb) {
            dispatch(fetchScene5(initMap5LockingRBsam as Map));
          } else if (samwei) {
            dispatch(fetchScene5(initMap5LockingSamWei as Map));
          } else if (rbWei) {
            dispatch(fetchScene5(initMap5LockingRBwei as Map));
          } else if (rb) {
            dispatch(fetchScene5(initMap5LockingRB as Map));
          } else if (sam) {
            dispatch(fetchScene5(initMap5LockingSam as Map));
          } else if (wei) {
            dispatch(fetchScene5(initMap5LockingWei as Map));
          } else {
            dispatch(fetchScene5(initMap5Locking as Map));
          }
      }
    }
  }, []);

  return (
    <div className="start-container5">
      <div
        className={`${hero.name}`}
        style={{ top: `${hero.y * 50}px`, left: `${hero.x * 50}px` }}
      ></div>
      {scene5.map((yLine, yIndex) =>
        yLine.map((xLine, xIndex) => {
          if (xLine.exists) {
            return (
              <div
                className={xLine.name}
                style={{ top: `${yIndex * 50}px`, left: `${xIndex * 50}px` }}
              ></div>
            );
          } else return;
        })
      )}
    </div>
  );
}

export default Scene5;

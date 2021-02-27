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
} from "../../store/scene1/data";

function Scene5() {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;
  const scene5 = useSelector(getScene5) as Map;
  Scene1EventHandler(scene5);

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
          dispatch(fetchScene5(initMap5Butt as Map));
          return;
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

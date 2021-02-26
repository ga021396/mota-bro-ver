import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import "./scene3.scss";
import Scene1EventHandler from "../../hooks/scene1EventHandler";
import { getScene3 } from "../../store/scene1/selectors";
import { Map } from "../../store/scene1/type";
import { fetchScene3 } from "../../store/scene1/action";
import {
  initMap3Sam,
  initMap3Arwei,
  initMap3Rb,
} from "../../store/scene1/data";

function Scene3() {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;
  const scene3 = useSelector(getScene3) as Map;
  Scene1EventHandler(scene3);

  useEffect(() => {
    if (scene3.length <= 0) {
      switch (hero.name) {
        case "sam":
          dispatch(fetchScene3(initMap3Sam as Map));
          return;
        case "arwei":
          dispatch(fetchScene3(initMap3Arwei as Map));
          return;
        case "rb":
          dispatch(fetchScene3(initMap3Rb as Map));
          return;
      }
    }
  }, []);

  return (
    <div className="start-container3">
      <div
        className={`${hero.name}`}
        style={{ top: `${hero.y * 50}px`, left: `${hero.x * 50}px` }}
      ></div>
      {scene3.map((yLine, yIndex) =>
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

export default Scene3;

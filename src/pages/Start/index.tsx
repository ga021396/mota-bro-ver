import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import "./start.scss";
import Scene1EventHandler from "../../hooks/scene1EventHandler";
import { getScene1 } from "../../store/scene1/selectors";
import { Map } from "../../store/scene1/type";

function Start() {
  const hero = useSelector(getHero) as Hero;
  const scene1 = useSelector(getScene1) as Map;
  Scene1EventHandler(scene1);

  return (
    <div className="start-container">
      <div
        className={`${hero.name}`}
        style={{ top: `${hero.y * 50}px`, left: `${hero.x * 50}px` }}
      ></div>
      {scene1.map((yLine, yIndex) =>
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

export default Start;

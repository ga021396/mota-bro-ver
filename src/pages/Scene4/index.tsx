import { useSelector } from "react-redux";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import "./scene4.scss";
import Scene1EventHandler from "../../hooks/scene1EventHandler";
import { getScene4 } from "../../store/scene1/selectors";
import { Map } from "../../store/scene1/type";

function Scene4() {
  const hero = useSelector(getHero) as Hero;
  const scene4 = useSelector(getScene4) as Map;
  Scene1EventHandler(scene4);

  return (
    <div className="start-container4">
      <div
        className={`${hero.name}`}
        style={{ top: `${hero.y * 50}px`, left: `${hero.x * 50}px` }}
      ></div>
      {scene4.map((yLine, yIndex) =>
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

export default Scene4;

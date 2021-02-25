import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { getHero } from "../store/hero/selectors";
import { Hero } from "../store/hero/type";
import { useDispatch } from "react-redux";
import { fetch } from "../store/hero/action";
import { fetchScene1 } from "../store/scene1/action";
import { Map } from "../store/scene1/type";
import { fetchCount, fetchMessage } from "../store/count/action";

const useUpdateHero = (map: Map) => {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;

  const updateScene1 = (y: number, x: number, map: Map) => {
    if (map?.[y]?.[x]?.name === "smorc" && hero.hp > 20) {
      map[y][x] = { exists: false, name: "" };
      dispatch(fetchScene1(map));
      dispatch(fetchMessage("你打倒了獸人，獲得1000金幣。"));
      dispatch(fetch({ ...hero, hp: hero.hp - 20, money: hero.money + 1000 }));
    }
  };

  const handleUserKeyPress = useCallback(
    (event) => {
      // top
      if (event.keyCode === 38 && hero.y > 0) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y - 1]?.[hero.x].exists) {
          updateScene1(hero.y - 1, hero.x, map);
          return;
        }
        dispatch(fetch({ ...hero, y: hero.y - 1 }));
        return;
      }

      // buttom
      if (event.keyCode === 40 && hero.y < 10) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y + 1]?.[hero.x].exists) {
          updateScene1(hero.y + 1, hero.x, map);
          return;
        }
        dispatch(fetch({ ...hero, y: hero.y + 1 }));
        return;
      }

      // left
      if (event.keyCode === 37 && hero.x > 0) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y]?.[hero.x - 1].exists) {
          updateScene1(hero.y, hero.x - 1, map);
          if (map?.[hero.y]?.[hero.x - 1].name === "next")
            dispatch(fetchCount(2));
          return;
        }
        dispatch(fetch({ ...hero, x: hero.x - 1 }));
        return;
      }

      // right
      if (event.keyCode === 39 && hero.x < 10) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y]?.[hero.x + 1].exists) {
          updateScene1(hero.y, hero.x + 1, map);
          return;
        }
        dispatch(fetch({ ...hero, x: hero.x + 1 }));
        return;
      }
    },
    [hero]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
};

export default useUpdateHero;

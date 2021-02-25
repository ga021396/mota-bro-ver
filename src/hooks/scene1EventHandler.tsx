import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { getHero } from "../store/hero/selectors";
import { Hero } from "../store/hero/type";
import { useDispatch } from "react-redux";
import { fetch } from "../store/hero/action";
import { fetchScene1 } from "../store/scene1/action";
import { Map } from "../store/scene1/type";
import { fetchCount, fetchMessage } from "../store/count/action";

const Scene1EventHandler = (map: Map) => {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;

  const updateScene1 = (y: number, x: number, map: Map) => {
    const getExists = () => {
      return map[y][x].exists;
    };

    const step = () => {
      map[y][x] = { ...map[y][x], exists: getExists() - 1 };
      dispatch(fetchScene1(map));
    };

    // next
    if (map?.[hero.y]?.[hero.x - 1]?.name === "next") {
      dispatch(fetchCount(2));
      dispatch(fetch({ ...hero, x: 0, y: 1 }));
    }

    // 獸人
    if (map?.[y]?.[x]?.name === "smorc") {
      if (hero.hp > 20) {
        step();
        dispatch(fetchMessage("你打倒了獸人，受到20點傷害，獲得1000金幣。"));
        dispatch(
          fetch({ ...hero, hp: hero.hp - 20, money: hero.money + 1000 })
        );
      } else {
        dispatch(fetchMessage("菜ㄐ，連獸人都打不贏。"));
      }
    }

    // Afa
    if (map?.[y]?.[x]?.name === "afa") {
      if (hero.name === "sam") {
        if (getExists() === 2) {
          step();
          dispatch(fetchMessage("不．共．戴．天。"));
          dispatch(fetch({ ...hero, money: hero.money - 999999 }));
        } else {
          dispatch(fetchMessage("不．共．戴．天。"));
          dispatch(fetch({ ...hero, money: hero.money - 999999 }));
        }
      } else {
        if (getExists() === 2) {
          step();
          dispatch(fetchMessage("阿法大口一吃，你損失了10000金幣。"));
          dispatch(fetch({ ...hero, money: hero.money - 10000 }));
        } else {
          dispatch(fetchMessage("打補低，打不大～打補低，打不大～"));
        }
      }
    }

    // ｍｍｄ
    if (map?.[y]?.[x]?.name === "mmd") {
      if (getExists() === 3) {
        dispatch(fetchMessage("都馬我來扛。"));
        step();
      } else if (getExists() === 2) {
        dispatch(fetchMessage("獲得咪咪守護，防禦力加20。"));
        dispatch(fetch({ ...hero, def: hero.def + 20 }));
        step();
      } else {
        dispatch(fetchMessage("O我的天。"));
      }
    }

    // 500
    if (map?.[y]?.[x]?.name === "sta") {
      step();
      dispatch(fetchMessage("５００大軍幫你助陣，獲得了1000金幣。"));
      dispatch(fetch({ ...hero, money: hero.money + 1000 }));
    }

    // K7
    if (map?.[y]?.[x]?.name === "k7") {
      if (hero.name === "sam") {
        if (getExists() === 2) {
          step();
          dispatch(fetchMessage("ｋ７贊助了你3000元。"));
          dispatch(fetch({ ...hero, money: hero.money + 3000 }));
        } else if (getExists() === 3) {
          step();
          dispatch(fetchMessage("所以你有要來找小蝶嗎？"));
        } else {
          dispatch(fetchMessage("要加入Ｋ７娛樂嗎？"));
        }
      } else if (hero.name === "arwei") {
        if (getExists() === 2) {
          step();
          dispatch(fetch({ ...hero, hp: hero.hp - 20 }));
          dispatch(fetchMessage("你被扣了20點血。"));
        } else if (getExists() === 3) {
          step();
          dispatch(fetchMessage("你這樣背叛去電狼我很傷心。"));
        } else {
          dispatch(fetchMessage("背骨仔。"));
        }
      } else {
        if (getExists() === 2) {
          step();
          dispatch(
            fetchMessage("你內心受傷，被扣了20點血，但ｋ７給了你5000塊簽約金。")
          );
          dispatch(
            fetch({ ...hero, hp: hero.hp - 20, money: hero.money + 5000 })
          );
        } else if (getExists() === 3) {
          step();
          dispatch(fetchMessage("蛤～穿八件還這麼平喔。"));
        } else {
          dispatch(fetchMessage("什麼時候來公司？"));
        }
      }
    }
  };

  const handleUserKeyPress = useCallback(
    (event) => {
      // top
      if (event.keyCode === 38 && hero.y > 0) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y - 1]?.[hero.x]?.exists) {
          updateScene1(hero.y - 1, hero.x, map);
          return;
        }
        dispatch(fetch({ ...hero, y: hero.y - 1 }));
        return;
      }

      // buttom
      if (event.keyCode === 40 && hero.y < 10) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y + 1]?.[hero.x]?.exists) {
          updateScene1(hero.y + 1, hero.x, map);
          return;
        }
        dispatch(fetch({ ...hero, y: hero.y + 1 }));
        return;
      }

      // left
      if (event.keyCode === 37 && hero.x > 0) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y]?.[hero.x - 1]?.exists) {
          updateScene1(hero.y, hero.x - 1, map);
          return;
        }
        dispatch(fetch({ ...hero, x: hero.x - 1 }));
        return;
      }

      // right
      if (event.keyCode === 39 && hero.x < 10) {
        dispatch(fetchMessage(""));
        if (map?.[hero.y]?.[hero.x + 1]?.exists) {
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

export default Scene1EventHandler;

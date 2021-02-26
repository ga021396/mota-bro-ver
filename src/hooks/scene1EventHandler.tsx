import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { getHero } from "../store/hero/selectors";
import { Hero } from "../store/hero/type";
import { useDispatch } from "react-redux";
import { fetch } from "../store/hero/action";
import { Map } from "../store/scene1/type";
import { fetchCount, fetchMessage } from "../store/count/action";

const Scene1EventHandler = (map: Map) => {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;

  const updateScene1 = (y: number, x: number, map: Map) => {
    const getExists = () => {
      return map?.[y]?.[x]?.exists;
    };

    const getName = () => {
      return map?.[y]?.[x]?.name;
    };

    const step = () => {
      map[y][x] = { ...map[y][x], exists: getExists() - 1 };
    };

    // snow
    if (getName() === "snow") {
      if (hero.hp > 5920) {
        if (getExists() === 3) {
          dispatch(fetchMessage("謝謝，你是很好的人。"));
          step();
        } else if (getExists() === 2) {
          dispatch(
            fetchMessage("很高興可以認識跟你當朋友，但是目前沒有談感情的打算。")
          );
          step();
        } else if (getExists() === 1) {
          dispatch(fetchMessage(" 謝謝你的支持，祝你找到屬於你的幸福。"));
          step();
          dispatch(fetchCount(6));
        }
      } else {
        if (getExists() === 3) {
          dispatch(fetchMessage("你來啦，盛。"));
          step();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("我答應你。"));
          step();
        } else if (getExists() === 1) {
          dispatch(fetchMessage("我們再一起吧!"));
          dispatch(fetchCount(6));
        }
      }
    }

    // kamoi
    if (getName() === "kamoi") {
      if (hero.hp > 5920) {
        if (getExists() === 3) {
          dispatch(fetchMessage("謝謝你。"));
          step();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("但我們在一起，狀態一直下滑。"));
          step();
        } else if (getExists() === 1) {
          dispatch(fetchMessage("希望你能找到對的人。"));
          dispatch(fetchCount(6));
        }
      } else {
        if (getExists() === 3) {
          dispatch(fetchMessage("你來啦，盛。"));
          step();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("我們一起克服困難好嗎?"));
          step();
        } else if (getExists() === 1) {
          dispatch(fetchMessage("這次，絕不會再讓幸福溜走了。"));
          dispatch(fetchCount(6));
          dispatch(fetch({ ...hero, end: true }));
        }
      }
    }

    //door
    if (getName() === "door") {
      if (hero?.key) {
        dispatch(fetchMessage("門打開了。"));
        dispatch(fetch({ ...hero, key: 0 }));
        step();
      } else {
        dispatch(fetchMessage("沒有鑰匙了。"));
      }
    }

    // key
    if (getName() === "key") {
      if (hero.hp >= 5920) {
        dispatch(fetchMessage("撿到了一把鑰匙。"));
        dispatch(fetch({ ...hero, key: 1 }));
        step();
      } else {
        dispatch(fetchMessage("太重了，拿不動。"));
      }
    }

    // dark
    if (getName() === "ds3") {
      dispatch(
        fetchMessage(
          "我都打不過還想看結局阿?還逃去隻狼，垃圾小孩162，破完再回來啦。"
        )
      );
    }

    // apple
    if (getName() === "apple") {
      if (hero.def < 1212) {
        dispatch(fetchMessage("才剛吃完溫體牛呢，沒錢的小子回家打手槍啦。"));
      } else {
        if (getExists() === 2) {
          dispatch(fetchMessage("這...就是圖奇第一男妓的實力嗎?"));
          step();
        } else {
          dispatch(fetchMessage("你大腳一踢把紅蘋果踹爛了。"));
          step();
        }
      }
    }

    // ani
    if (getName() === "ani") {
      if (hero.def > 1212) {
        if (getExists() === 3) {
          dispatch(fetchMessage("謝謝你。"));
          step();
        } else if (getExists() === 2) {
          dispatch(
            fetchMessage(
              "但是我對你沒感覺了，而且我不太想跟在火鍋店摩托搖的人交往。"
            )
          );
          step();
        } else if (getExists() === 1) {
          dispatch(fetchMessage("再見。"));
          step();
          dispatch(fetch({ ...hero, money: 730, hp: 730, atk: 730, def: 730 }));
          dispatch(fetchCount(6));
        }
      } else {
        if (getExists() === 3) {
          dispatch(fetchMessage("你來啦，誠。"));
          step();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("願意再給我一次機會嗎?"));
          step();
        } else if (getExists() === 1) {
          dispatch(fetchMessage("這次，絕不會再讓幸福溜走了。"));
          dispatch(fetchCount(6));
          dispatch(fetch({ ...hero, end: true }));
        }
      }
    }

    // nl
    if (getName() === "nl") {
      if (getExists() === 3) {
        step();
        dispatch(fetchMessage("前面就是最後了，進去後就沒辦法回頭。"));
      } else if (getExists() === 2) {
        step();
        dispatch(
          fetchMessage(
            "謹慎分配能力值，破關的線索就在地圖裡，相信你可以做到的。"
          )
        );
      } else {
        step();
        dispatch(fetchMessage("獲得班長的贈禮，得到50000元。"));
        dispatch(fetch({ ...hero, money: hero.money + 50000 }));
      }
    }

    // do
    if (getName() === "do") {
      if (getExists() === 2) {
        step();
        dispatch(fetchMessage("謝謝你來救我，不過你要找的人在上面。"));
      } else {
        dispatch(fetchMessage("今天是淺藍色的。"));
      }
    }

    // lin
    if (getName() === "lin") {
      if (getExists() === 2) {
        step();
        dispatch(fetchMessage("你被林肯怕的氣勢激勵，攻擊力上升50點。"));
        dispatch(fetch({ ...hero, atk: hero.atk + 50 }));
      } else {
        dispatch(fetchMessage("林肯怕!"));
      }
    }

    // fu
    if (getName() === "fu") {
      dispatch(fetchMessage("應該是往前看，他把他挪到旁邊去。"));
    }

    // sam fu
    if (getName() === "samfu") {
      step();
      dispatch(fetchMessage("你以為我是負荷嗎?"));
      map[y][x] = { ...map[y][x], name: "fu" };
    }

    // da
    if (getName() === "da") {
      if (getExists() === 2) {
        step();
        dispatch(fetchMessage("跟妲妲去唱KTV，花了3000元。"));
        dispatch(fetch({ ...hero, money: hero.money - 3000 }));
      } else {
        dispatch(fetchMessage("哥哥~你好了嗎?"));
      }
    }

    // ET
    if (getName() === "ET") {
      if (getExists() === 3) {
        step();
        dispatch(fetchMessage("你為什麼要給大家看畢業紀念冊..."));
      } else if (getExists() === 2) {
        step();
        dispatch(fetchMessage("你內心愧疚，損失了1000生命值。"));
        dispatch(fetch({ ...hero, hp: hero.hp - 1000 }));
      } else {
        dispatch(fetchMessage("要錢錢要錢錢，哥哥我要你的錢~"));
        dispatch(fetch({ ...hero, money: hero.money - 1000 }));
      }
    }

    // chick
    if (getName() === "chick") {
      step();
      dispatch(fetchMessage("雞雞很癢，抓了一下。"));
    }

    // nai
    if (getName() === "nai") {
      if (getExists() === 2) {
        step();
        dispatch(fetchMessage("你從奈兒那邊偷了淺藍色內褲，增加防禦力50點。"));
        dispatch(fetch({ ...hero, def: hero.def + 50 }));
      } else {
        dispatch(fetchMessage("什麼時候還我內褲?"));
      }
    }

    // mao
    if (getName() === "mao") {
      step();
      dispatch(fetchMessage("你從鳥人手中救出了貓，然後把它賣掉賺了10000塊。"));
      dispatch(fetch({ ...hero, money: hero.money + 10000 }));
    }

    // butt
    if (getName() === "butt") {
      if (getExists() === 2) {
        step();
        dispatch(fetchMessage("你獲得阿蝶的安慰，HP+5000"));
        dispatch(fetch({ ...hero, hp: hero.hp + 5000 }));
      } else {
        dispatch(fetchMessage("屁眼屁眼屁眼。"));
      }
    }

    // bird
    if (getName() === "bird") {
      if (hero.hp > 1000) {
        step();
        dispatch(fetchMessage("擊倒了鳥人，損失1000滴血，獲得1000元。"));
        dispatch(
          fetch({ ...hero, hp: hero.hp - 1000, money: hero.money + 1000 })
        );
      } else {
        dispatch(fetchMessage("回家多練練。"));
      }
    }

    // Oan
    if (getName() === "oan") {
      if (getExists() === 2) {
        step();
        dispatch(fetchMessage("小哥哥快來~"));
      } else {
        if (hero.name === "sam") {
          dispatch(fetchMessage("歐安親了你一口。"));
        } else if (hero.name === "rb") {
          dispatch(fetchMessage("等我呦，下禮拜上台北去你家~"));
        } else {
          dispatch(fetchMessage("我不認識你。"));
        }
      }
    }

    // ticket
    if (getName() === "ticket") {
      if (getExists() === 2) {
        step();
        dispatch(fetchMessage("似乎是一封性騷擾的傳票。"));
      } else {
        if (hero.name === "sam") {
          step();
          dispatch(fetchMessage("由於你有精神上的障礙，法官判你無罪。"));
        } else if (hero.name === "arwei") {
          step();
          dispatch(fetchMessage("你私下給了對方一萬塊和解。"));
          dispatch(fetch({ ...hero, money: hero.money - 10000 }));
        } else {
          step();
          dispatch(fetchMessage("對方看到你的臉，決定撤告。"));
        }
      }
    }

    // tea
    if (getName() === "tea") {
      step();
      dispatch(fetchMessage("喝了一口冬瓜露，提升2點防禦。"));
      dispatch(fetch({ ...hero, def: hero.def + 2 }));
    }

    // jail
    if (getName() === "jail") {
      if (hero.name === "arwei") {
        step();
        dispatch(fetchMessage("下面似乎有條縫隙。"));
      } else {
        dispatch(fetchMessage("似乎沒辦法穿過這面柵欄。"));
      }
    }

    // 李米
    if (getName() === "limi") {
      if (hero.name === "rb") {
        if (getExists() === 3) {
          step();
          dispatch(fetchMessage("就算你不愛我，我還是會一直等著你。"));
        } else if (getExists() === 2) {
          step();
          dispatch(fetchMessage("李米斗內了你一萬塊。"));
          dispatch(fetch({ ...hero, money: hero.money + 10000 }));
        } else {
          map[y][x] = { ...map[y][x], name: "limicry" };
        }
      } else {
        dispatch(fetchMessage("我等的人不是你。"));
      }
    }

    if (getName() === "limicry") {
      dispatch(fetchMessage("我們還有機會嗎?"));
    }

    // yang
    if (getName() === "yang") {
      if (hero.hp > 5000 || hero.atk > 100 || hero.def > 1000) {
        if (getExists() === 2) {
          if (hero.name === "arwei") {
            step();
            dispatch(fetchMessage("幹!怎麼可以那麼難聽。"));
          } else {
            step();
            dispatch(fetchMessage("厲害，你才是最強的天籟唱將。"));
          }
        } else {
          if (hero.name === "arwei") {
            step();
            dispatch(fetchMessage("楊坤嚇跑了。"));
          } else {
            step();
            dispatch(fetchMessage("楊坤甘拜下風，將獎金都頒給你了。"));
            dispatch(fetch({ ...hero, money: hero.money + 30000 }));
          }
        }
      } else {
        dispatch(fetchMessage("小子，等唱得贏我來在吧。"));
      }
    }

    // next
    if (getName() === "next") {
      dispatch(fetchCount(2));
      dispatch(fetch({ ...hero, x: 0, y: 1 }));
    }

    if (getName() === "nextTo3") {
      dispatch(fetchCount(3));
      dispatch(fetch({ ...hero, x: 0, y: 1 }));
    }

    if (getName() === "backTo1") {
      dispatch(fetchCount(1));
      dispatch(fetch({ ...hero, x: 1, y: 0 }));
    }

    if (getName() === "nextTo4") {
      dispatch(fetchCount(4));
      dispatch(fetch({ ...hero, x: 5, y: 9 }));
    }

    if (getName() === "backTo2") {
      dispatch(fetchCount(2));
      dispatch(fetch({ ...hero, x: 0, y: 9 }));
    }

    if (getName() === "nextTo5") {
      dispatch(fetchCount(5));
      dispatch(fetch({ ...hero, x: 5, y: 9 }));
    }

    if (getName() === "backTo3") {
      dispatch(fetchCount(3));
      dispatch(fetch({ ...hero, x: 9, y: 1 }));
    }

    // 獸人
    if (getName() === "smorc") {
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
    if (getName() === "afa") {
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
    if (getName() === "mmd") {
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
    if (getName() === "sta") {
      step();
      dispatch(fetchMessage("５００大軍幫你助陣，獲得了1000金幣。"));
      dispatch(fetch({ ...hero, money: hero.money + 1000 }));
    }

    // K7
    if (getName() === "k7") {
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

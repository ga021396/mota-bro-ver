import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { getHero } from "../store/hero/selectors";
import { Hero } from "../store/hero/type";
import { useDispatch } from "react-redux";
import { fetch } from "../store/hero/action";
import { Map } from "../store/scene1/type";
import { fetchCount, fetchMessage } from "../store/count/action";
import { fetchScene4, fetchScene3 } from "../store/scene1/action";
import { initMap4But, initMapLocking3 } from "../store/scene1/data";

const Scene1EventHandler = (map: Map) => {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;

  const updateLeeMap = (y: number, x: number, map: Map) => {
    const getName = () => {
      return map?.[y]?.[x]?.name;
    };
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
      dispatch(fetch({ ...hero, x: 10, y: 1 }));
    }

    if (getName() === "nextTo6") {
      dispatch(fetchCount(6));
      dispatch(fetch({ ...hero, end: true }));
    }

    if (getName() === "fw") {
      dispatch(fetchCount(1));
      dispatch(fetch({ ...hero, name: "lock1ng", hp: 0, x: 5, y: 10 }));
      dispatch(fetchScene3(initMapLocking3 as Map));
      fetchMessage("你獲得了LOL M冠軍，大家似乎對你有了印象。");
    }
  };

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

    const stepUp = () => {
      map[y][x] = { ...map[y][x], exists: getExists() + 1 };
    };

    if (getName() === "nextTo6") {
      dispatch(fetchCount(6));
    }

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
          dispatch(fetchMessage("我們在一起吧!"));
          dispatch(fetchCount(6));
          dispatch(fetch({ ...hero, end: true }));
        }
      }
    }

    // kamoi
    if (getName() === "sam-bu") {
      if (hero.hp !== 7414) {
        if (getExists() === 3) {
          dispatch(fetchMessage("哈哈，沒想到我爬得上來吧小蝶!"));
          step();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("情緒勒索情緒勒索情緒勒索。"));
          step();
        } else if (getExists() === 1) {
          dispatch(
            fetchMessage("你被迫跟阿盛雙排，慢慢演變成新一代屁眼女俠。")
          );
          dispatch(fetchCount(6));
        }
      } else {
        if (getExists() === 3) {
          dispatch(fetchMessage("蝴蝶兒~"));
          step();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("我好想跟你生小孩啊~蝴蝶兒~"));
          step();
        } else if (getExists() === 1) {
          dispatch(fetchMessage("你覺得這個人怪怪的，決定遠離。"));
          dispatch(fetchCount(6));
          dispatch(fetch({ ...hero, end: true, name: "buttAgo" }));
          step();
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

    // mon
    if (getName() === "mon") {
      if (getExists() === 1) {
        dispatch(fetchMessage("他們似乎唱得很快樂。"));
        stepUp();
      } else if (getExists() === 2) {
        dispatch(fetchMessage("隔著螢幕，看著兄弟幫的大家歡鬧嬉戲。"));
        stepUp();
      } else {
        dispatch(fetchMessage("難道這就是最好的陣容嗎..."));
        dispatch(fetchCount(6));
        dispatch(fetch({ ...hero, end: true }));
      }
    }

    // mic
    if (getName() === "mic") {
      if (!hero.save) {
        if (getExists() === 1) {
          dispatch(fetchMessage("星期六，你如約來到了KTV。"));
          stepUp();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("一如往常的開始RAP。"));
          stepUp();
        } else {
          dispatch(fetchMessage("但似乎一個人都沒有..."));
          dispatch(fetchCount(6));
          dispatch(fetch({ ...hero, end: false }));
        }
      } else {
        if (getExists() === 1) {
          dispatch(fetchMessage("星期六，你如約來到了KTV。"));
          stepUp();
        } else if (getExists() === 2) {
          dispatch(fetchMessage("一如往常的開始RAP。"));
          stepUp();
        } else {
          dispatch(fetchMessage("但似乎缺少了什麼。"));
          dispatch(fetchCount(6));
          dispatch(fetch({ ...hero, end: false }));
        }
      }
    }

    // wei-l
    if (getName() === "wei-l") {
      if (getExists() === 3) {
        dispatch(fetchMessage("嗨!禮拜六要載你嗎?"));
        step();
      } else if (getExists() === 2) {
        dispatch(fetchMessage("要的話再打給我耶~"));
        step();
      } else {
        dispatch(fetchMessage("阿緯先離開了。"));
        step();
        dispatch(fetch({ ...hero, save: { ...hero.save, wei: true } }));
      }
    }

    // sam-l
    if (getName() === "sam-l") {
      if (getExists() === 3) {
        dispatch(fetchMessage("康~哪次步是把你捧在手心上。"));
        step();
      } else if (getExists() === 2) {
        dispatch(fetchMessage("禮拜六唱歌記得喔!"));
        step();
      } else {
        dispatch(fetchMessage("家盛先離開了。"));
        step();
        dispatch(fetch({ ...hero, save: { ...hero.save, sam: true } }));
      }
    }

    // rb-l
    if (getName() === "rb-l") {
      if (getExists() === 3) {
        dispatch(fetchMessage("喔，作康阿!"));
        step();
      } else if (getExists() === 2) {
        dispatch(fetchMessage("禮拜六記得別遲到喔!"));
        step();
      } else {
        dispatch(fetchMessage("RB先一步離開了，不過掉了一張名片。"));
        step();
        dispatch(
          fetch({ ...hero, auth: true, save: { ...hero.save, rb: true } })
        );
      }
    }

    // shan
    if (getName() === "shan") {
      if (getExists() === 2) {
        dispatch(fetchMessage("你偷偷的拿走了湘湘的印章。"));
        dispatch(fetch({ ...hero, letter: 1 }));
        step();
      } else if (getExists() === 1) {
        dispatch(fetchMessage("湘湘沒看見你。"));
      }
    }

    // bo
    if (getName() === "bo") {
      if (getExists() === 2) {
        dispatch(fetchMessage("能幫我追阿蛋嗎?"));
        step();
      } else if (getExists() === 1) {
        dispatch(fetchMessage("得到了小波的信。"));
        dispatch(fetch({ ...hero, letter: 1 }));
        step();
      }
    }

    // orange
    if (getName() === "orange") {
      if (getExists() === 2) {
        dispatch(fetchMessage("媽咪別來，我不想剪指甲了。"));
        step();
      } else if (getExists() === 1) {
        dispatch(fetchMessage("橘子逃走了。"));
        step();
      }
    }

    //feng
    if (getName() === "feng") {
      if (getExists() === 3) {
        dispatch(fetchMessage("你的貼圖超好用，我訂閱多了一堆，爽阿刺阿!"));
        step();
      } else if (getExists() === 2) {
        dispatch(fetchMessage("你內心受傷，HP扣1000。"));
        dispatch(fetch({ ...hero, hp: hero.hp - 1000 }));
        step();
      } else {
        dispatch(fetchMessage("什麼時候有新素材?"));
      }
    }

    //door
    if (getName() === "door") {
      if (hero?.key) {
        dispatch(fetchMessage("門打開了。"));
        dispatch(fetch({ ...hero, key: hero?.key - 1 }));
        step();
      } else {
        dispatch(fetchMessage("沒有鑰匙了。"));
      }
    }

    // key
    if (getName() === "key") {
      if (hero.name === "butt") {
        dispatch(fetchMessage("撿到了一把鑰匙。"));
        dispatch(fetch({ ...hero, key: 1 }));
        step();
      } else {
        if (hero.hp >= 5920) {
          dispatch(fetchMessage("撿到了一把鑰匙。"));
          dispatch(fetch({ ...hero, key: 1 }));
          step();
        } else {
          dispatch(fetchMessage("太重了，拿不動。"));
        }
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
      if (hero.name === "butt") {
        if (hero.hp === 62314) {
          if (getExists() === 3) {
            step();
            dispatch(fetchMessage("熊班長只不過是上個時代的敗北者。"));
          } else if (getExists() === 2) {
            step();
            dispatch(fetchMessage("現在請稱我為，蝶班長!"));
          } else {
            step();
            dispatch(fetchMessage("你除掉了阿熊，晉升為新一代的班長。"));
            dispatch(fetch({ ...hero, hiddenEnd: true }));
            dispatch(fetchScene4(initMap4But as Map));
          }
        } else {
          if (getExists() === 3) {
            step();
            dispatch(fetchMessage("你也到達這裡了嗎，副班長。"));
          } else if (getExists() === 2) {
            step();
            dispatch(fetchMessage("放飛自我，不必在意他人眼光，加油!"));
          } else {
            step();
            dispatch(fetchMessage("獲得班長的激勵，得到50000元。"));
            dispatch(fetch({ ...hero, money: hero.money + 50000 }));
          }
        }
      } else if (hero.name === "lock1ng") {
        if (getExists() === 3) {
          step();
          dispatch(fetchMessage("嗯...你是..."));
        } else if (getExists() === 2) {
          step();
          dispatch(fetchMessage("阿算了想不起來，屁眼屁眼屁眼~"));
        } else {
          step();
          dispatch(fetchMessage("班長丟下50000離開了。"));
          dispatch(fetch({ ...hero, money: hero.money + 50000 }));
        }
      } else {
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
      if (hero.atk === 730) {
        if (getExists() === 4) {
          step();
          dispatch(fetchMessage("我去。 。 。"));
        } else if (getExists() === 3) {
          step();
          dispatch(
            fetchMessage(
              "看了這主播流出的視頻，又是扭腰擺臀，又是底褲外露，成天搔首弄姿活像個男娼似的。"
            )
          );
        } else if (getExists() === 2) {
          step();
          dispatch(
            fetchMessage(
              "但不知怎地我的雞兒卻跟石頭一樣硬，到底是怎麼了我。 。"
            )
          );
        } else if (getExists() === 1) {
          step();
          dispatch(
            fetchMessage(
              "聽到這席話，你內心終於豁然開朗，決定不在追尋過去，誓言成為圖奇羅蘭。"
            )
          );
          dispatch(fetch({ ...hero, end: true, hiddenEnd: true, x: 5, y: 0 }));
          dispatch(fetchCount(6));
        }
      } else dispatch(fetchMessage("雞雞很癢，抓了一下。"));
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
    if (getName() === "but") {
      if (hero.hp === 520) {
        if (getExists() === 4) {
          dispatch(fetchMessage("我好想去ME阿!"));
          stepUp();
        } else if (getExists() === 5) {
          dispatch(fetchMessage("蝴蝶兒"));
          stepUp();
        } else if (getExists() === 6) {
          dispatch(fetchMessage("我愛你蝴蝶兒!"));
          stepUp();
        } else if (getExists() === 7) {
          dispatch(fetchMessage("我好想跟妳生小孩啊!"));
          stepUp();
        } else if (getExists() === 8) {
          dispatch(fetchMessage("啊啊啊啊啊啊啊啊啊啊 !"));
          stepUp();
        } else if (getExists() === 9) {
          dispatch(fetchMessage("你決定放下一切，跟阿蝶遠走高飛。"));
          dispatch(fetch({ ...hero, end: true, hiddenEnd: true, x: 5, y: 9 }));
          dispatch(fetchCount(6));
          stepUp();
        }
      } else {
        if (getExists() === 4) {
          step();
          dispatch(fetchMessage("你獲得阿蝶的安慰，HP+5000"));
          dispatch(fetch({ ...hero, hp: hero.hp + 5000 }));
        } else {
          dispatch(fetchMessage("屁眼屁眼屁眼。"));
        }
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
        } else if (hero.name === "butt") {
          dispatch(fetchMessage("妳也想加入JKF女郎嗎?"));
        } else if (hero.name === "lock1ng") {
          dispatch(fetchMessage("嗯...你是?"));
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
        } else if (hero.name === "butt") {
          step();
          dispatch(fetchMessage("妳大罵一聲7414，對方嚇到撤告了。"));
        } else if (hero.name === "lock1ng") {
          step();
          dispatch(fetchMessage("對方一直聯繫不到你，無奈只撤告。"));
        } else {
          step();
          dispatch(fetchMessage("對方看到你的臉，決定撤告。"));
        }
      }
    }

    // tea
    if (getName() === "tea") {
      if (hero.name === "butt") {
        step();
        dispatch(fetchMessage("阿緯~~~~阿緯~~~~~~"));
        dispatch(fetch({ ...hero, hp: hero.hp + 50000 }));
      } else if (hero.name === "lock1ng") {
        step();
        dispatch(fetchMessage("你把冬瓜露的罐子擰成了兩根鐵絲。"));
        dispatch(fetch({ ...hero, key: hero.key + 2 }));
        return;
      } else {
        step();
        dispatch(fetchMessage("喝了一口冬瓜露，提升2點防禦。"));
        dispatch(fetch({ ...hero, def: hero.def + 2 }));
      }
    }

    // jail
    if (getName() === "jail") {
      if (hero.name === "arwei") {
        step();
        dispatch(fetchMessage("下面似乎有條縫隙。"));
      }
      if (hero.key) {
        step();
        dispatch(fetchMessage("門打開了。"));
        dispatch(fetch({ ...hero, key: hero.key - 1 }));
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
      } else if (hero.name === "lock1ng") {
        dispatch(fetchMessage("李米沒看見你。"));
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
          } else if (hero.name === "lock1ng") {
            step();
            dispatch(fetchMessage("哇操!你難道是中國新說唱的冠軍嗎?"));
          } else {
            step();
            dispatch(fetchMessage("厲害，你才是最強的天籟唱將。"));
          }
        } else {
          if (hero.name === "arwei") {
            step();
            dispatch(fetchMessage("楊坤嚇跑了。"));
          } else if (hero.name === "lock1ng") {
            step();
            dispatch(fetchMessage("楊坤自愧不如，將導師之位讓賢，全能力x2"));
            dispatch(
              fetch({
                ...hero,
                hp: hero.hp * 2,
                atk: hero.atk * 2,
                def: hero.def * 2,
              })
            );
          } else {
            step();
            dispatch(fetchMessage("楊坤甘拜下風，將獎金都頒給你了。"));
            dispatch(fetch({ ...hero, money: hero.money + 30000 }));
          }
        }
      } else {
        dispatch(fetchMessage("小子，等唱得贏我再來吧。"));
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
      dispatch(fetch({ ...hero, x: 10, y: 1 }));
    }

    // 獸人
    if (getName() === "smorc") {
      if (hero.name === "lock1ng") {
        step();
        dispatch(fetchMessage("你隱蔽的繞到獸人背後，一擊必殺。獲得1000元。"));
        dispatch(fetch({ ...hero, money: hero.money + 1000 }));
        return;
      }
      if (hero.name === "butt") {
        step();
        dispatch(fetchMessage("獸人為酋長夫人獻上1000元。"));
        dispatch(fetch({ ...hero, money: hero.money + 1000 }));
        return;
      }
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
      if (hero.name === "lock1ng") {
        if (getExists() < 4) {
          stepUp();
          dispatch(fetchMessage("阿法大口一吃，被你靈巧的閃過了。"));
        } else {
          dispatch(fetchMessage("你露出了破綻，被大口一吃一萬塊。"));
          dispatch(fetch({ ...hero, money: hero.money - 10000 }));
        }
      } else if (hero.name === "sam") {
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
      if (getExists() === 4) {
        dispatch(fetchMessage("都馬我來扛。"));
        step();
      } else if (getExists() === 3) {
        dispatch(fetchMessage("獲得咪咪守護，防禦力加20。"));
        dispatch(fetch({ ...hero, def: hero.def + 20 }));
        step();
      } else {
        if (hero.name === "lock1ng" && hero.letter) {
          if (getExists() === 2) {
            dispatch(fetchMessage("你拿出了湘湘的信(偽造)。"));
            step();
          } else if (getExists() === 1) {
            dispatch(fetchMessage("阿蛋用鑰匙跟你交換。"));
            dispatch(fetch({ ...hero, key: hero.key + 1 }));
            step();
          }
        } else if (hero.letter) {
          if (getExists() === 2) {
            dispatch(fetchMessage("我的信?讓我瞧瞧。"));
            step();
          } else if (getExists() === 1) {
            dispatch(fetchMessage("我知道了。謝謝你。"));
            step();
          }
        } else {
          dispatch(fetchMessage("O我的天。"));
        }
      }
    }

    // 500
    if (getName() === "sta") {
      if (hero.name === "lock1ng") {
        dispatch(fetchMessage("System Error : cannot find element 'Lock1ng'."));
        return;
      }
      if (hero.name === "butt") {
        step();
        dispatch(
          fetchMessage("哭阿!史黑衝鋒隊長不配獲得５００的幫助，被扣了100點血。")
        );
        dispatch(fetch({ ...hero, hp: hero.hp - 100 }));
        return;
      }
      step();
      dispatch(fetchMessage("５００大軍幫你助陣，獲得了1000金幣。"));
      dispatch(fetch({ ...hero, money: hero.money + 1000 }));
    }

    // K7
    if (getName() === "k7") {
      if (hero.name === "lock1ng") {
        if (getExists() === 3) {
          stepUp();
          dispatch(fetchMessage("嗨!要加入凱琪娛樂嗎?"));
        } else if (getExists() === 4) {
          stepUp();
          dispatch(fetchMessage("你是那個..."));
        } else {
          if (hero?.auth) {
            if (getExists() === 5) {
              stepUp();
              dispatch(fetchMessage("你拿出了RB的名片。"));
            } else if (getExists() === 6) {
              stepUp();
              dispatch(fetchMessage("阿!原來是RB的朋友阿。"));
            } else if (getExists() === 7) {
              stepUp();
              dispatch(fetchMessage("從凱琪那邊拿到鑰匙。"));
              dispatch(fetch({ ...hero, key: hero.key + 1 }));
            } else if (getExists() === 8) {
              dispatch(fetchMessage("嗨!你是劉..."));
            }
          } else {
            dispatch(fetchMessage("凱琪想不起來你是誰。"));
          }
        }
      } else if (hero.name === "butt") {
        if (getExists() === 2) {
          step();
          dispatch(fetchMessage("ｋ７幫你發了工商文，得到3000塊。"));
          dispatch(fetch({ ...hero, money: hero.money + 3000 }));
        } else if (getExists() === 3) {
          step();
          dispatch(fetchMessage("今天有工商喔，別忘了。"));
        } else {
          dispatch(fetchMessage("要幫你拿外送嗎?"));
        }
      } else if (hero.name === "sam") {
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
        if (hero.name === "lee") {
          dispatch(fetch({ ...hero, y: hero.y - 1 }));
          updateLeeMap(hero.y - 1, hero.x, map);

          return;
        } else {
          dispatch(fetchMessage(""));
          if (map?.[hero.y - 1]?.[hero.x]?.exists) {
            updateScene1(hero.y - 1, hero.x, map);
            return;
          }
          dispatch(fetch({ ...hero, y: hero.y - 1 }));
          return;
        }
      }

      // buttom
      if (event.keyCode === 40 && hero.y < 10) {
        if (hero.name === "lee") {
          dispatch(fetch({ ...hero, y: hero.y + 1 }));
          updateLeeMap(hero.y + 1, hero.x, map);

          return;
        } else {
          dispatch(fetchMessage(""));
          if (map?.[hero.y + 1]?.[hero.x]?.exists) {
            updateScene1(hero.y + 1, hero.x, map);
            return;
          }
          dispatch(fetch({ ...hero, y: hero.y + 1 }));
          return;
        }
      }

      // left
      if (event.keyCode === 37 && hero.x > 0) {
        if (hero.name === "lee") {
          dispatch(fetch({ ...hero, x: hero.x - 1 }));
          updateLeeMap(hero.y, hero.x - 1, map);

          return;
        } else {
          dispatch(fetchMessage(""));
          if (map?.[hero.y]?.[hero.x - 1]?.exists) {
            updateScene1(hero.y, hero.x - 1, map);
            return;
          }
          dispatch(fetch({ ...hero, x: hero.x - 1 }));
          return;
        }
      }

      // right
      if (event.keyCode === 39 && hero.x < 10) {
        if (hero.name === "lee") {
          dispatch(fetch({ ...hero, x: hero.x + 1 }));
          updateLeeMap(hero.y, hero.x + 1, map);

          return;
        } else {
          dispatch(fetchMessage(""));
          if (map?.[hero.y]?.[hero.x + 1]?.exists) {
            updateScene1(hero.y, hero.x + 1, map);
            return;
          }
          dispatch(fetch({ ...hero, x: hero.x + 1 }));
          return;
        }
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

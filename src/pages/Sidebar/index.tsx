import "./sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { getHero } from "../../store/hero/selectors";
import { fetch } from "../../store/hero/action";
import { Hero } from "../../store/hero/type";

function Sidebar({ stage }: any) {
  const hero = useSelector(getHero) as Hero;
  const dispatch = useDispatch();

  const showName = (name: string) => {
    switch (name) {
      case "sam":
        return "Sam";
      case "rb":
        if (stage === 6 && !hero.end) return "R．";
        else return "R．B";
      case "arwei":
        return "AR．Wei";
      case "lee":
        return "Lee．Lock1ng";
    }
  };

  const handleSkillUp = (skill: string) => {
    switch (skill) {
      case "hp":
        dispatch(
          fetch({ ...hero, hp: hero.hp + 100, money: hero.money - 100 })
        );
        return;
      case "atk":
        dispatch(
          fetch({ ...hero, atk: hero.atk + 10, money: hero.money - 100 })
        );
        return;
      case "def":
        dispatch(
          fetch({ ...hero, def: hero.def + 10, money: hero.money - 100 })
        );
        return;
    }
  };

  return (
    <div className="sidebar-container">
      {stage !== 4 ? <div>第 {stage} 層</div> : <div>長廊</div>}

      <div>名稱 : {showName(hero.name)}</div>
      <div>
        <span>
          HP :{" "}
          {hero.money >= 100 && (
            <label onClick={() => handleSkillUp("hp")}></label>
          )}
        </span>
        {hero.hp}
      </div>
      <div>
        <span>
          ATK :{" "}
          {hero.money >= 100 && (
            <label onClick={() => handleSkillUp("atk")}></label>
          )}
        </span>
        {hero.atk}
      </div>
      <div>
        {" "}
        <span>
          DEF :{" "}
          {hero.money >= 100 && (
            <label onClick={() => handleSkillUp("def")}></label>
          )}
        </span>
        {hero.def}
      </div>
      <div>
        {" "}
        <span>$ :</span>
        {hero.money}
      </div>
    </div>
  );
}

export default Sidebar;

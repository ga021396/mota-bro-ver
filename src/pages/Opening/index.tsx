import "./opening.scss";
import { useSelector } from "react-redux";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import { useDispatch } from "react-redux";
import { fetch } from "../../store/hero/action";

const AR = {
  x: 5,
  y: 10,
  atk: 12,
  def: 10,
  hp: 100,
  name: "arwei",
  des: "AR．Wei是一隻矮人，由於身高較矮容易擊中敵人弱點，傷害較高。",
  money: 0,
};

const SAM = {
  x: 5,
  y: 10,
  atk: 10,
  def: 10,
  hp: 120,
  name: "sam",
  des: "Sam是個噁男，由於長期服藥血量與毒抗較高，空幹速度最快。",
  money: 0,
};

const RB = {
  x: 5,
  y: 10,
  atk: 10,
  def: 12,
  hp: 100,
  name: "rb",
  des: "R．B是一隻母豬，由於內褲很多件防禦較高，NPC親密度較高。",
  money: 0,
};

function Opening({ next, exp }: any) {
  const dispatch = useDispatch();
  const hero = useSelector(getHero) as Hero;
  const handleInitHero = (name: string) => {
    switch (name) {
      case "sam":
        dispatch(fetch(SAM));
        return;
      case "rb":
        dispatch(fetch(RB));
        return;
      case "arwei":
        dispatch(fetch(AR));
        return;
      default:
        dispatch(
          fetch({
            ...hero,
            name: name,
            des: "",
          })
        );
    }
  };

  const getDate = () => {
    var result = new Date();
    result.setDate(result.getDate() + 14);
    return `${result}`;
  };

  const showName = (name: string) => {
    switch (name) {
      case "sam":
        return "Sam";
      case "rb":
        return "R．B";
      case "arwei":
        return "AR．Wei";
      case "lee":
        return "Lee．Lock1ng";
    }
  };

  return (
    <div className="scene-container">
      <div className="des">兄弟塔</div>
      {hero.name && hero.name !== "lee" && (
        <div className="titleCon">
          <div className="title">確定要要選擇 {showName(hero.name)}?</div>
          {hero.des && <div>{hero.des}</div>}
        </div>
      )}

      {hero.name && hero.name === "lee" && (
        <div className="titleCon">
          <div className="title">你目前無法選擇 {showName(hero.name)}。</div>
          <div>此角色將於{getDate()}解鎖。</div>
        </div>
      )}

      <div className="role">
        <div className="roleCon">
          <div className="sam" onClick={() => handleInitHero("sam")}></div>
        </div>

        <div className="roleCon">
          <div className="rb" onClick={() => handleInitHero("rb")}></div>
        </div>

        <div className="roleCon">
          <div className="arwei" onClick={() => handleInitHero("arwei")}></div>
        </div>

        <div className="roleCon">
          <div className="lee" onClick={() => handleInitHero("lee")}></div>
        </div>
      </div>
      <div className="btnCon">
        {hero.name && hero.name !== "lee" && (
          <button className="Btn" onClick={next}>
            開始
          </button>
        )}
        <div className="Btn" onClick={exp}>
          說明
        </div>
      </div>
    </div>
  );
}

export default Opening;

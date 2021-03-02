import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getHero } from "../../store/hero/selectors";
import { Hero } from "../../store/hero/type";
import "./scene6.scss";

function Scene6() {
  const [timeLeft, setTimeLeft] = useState(false);

  const hero = useSelector(getHero) as Hero;

  setTimeout(() => {
    setTimeLeft(true);
  }, 10000);

  const getUrl = () => {
    switch (hero.name) {
      case "sam":
        if (hero.hiddenEnd)
          return "https://www.youtube.com/watch?v=WBOf7PlggBk&ab_channel=OuOSNOW";
        else {
          if (hero.end) return "https://www.youtube.com/watch?v=zwqwZMYhRGc";
          else return "https://www.youtube.com/watch?v=-zANQZ6_8rM";
        }

      case "rb":
        if (hero.hiddenEnd)
          return "https://www.youtube.com/watch?v=JbkpHkqvvGY";
        else {
          if (hero.end) return "https://www.youtube.com/watch?v=coQye04gQ0Q";
          else return "https://www.youtube.com/watch?v=XprdTvnqVIg";
        }

      case "lee":
        if (hero.end) return "https://www.youtube.com/watch?v=GLrchVDvZ8M";
        else return "https://www.youtube.com/watch?v=JDTK8IfJ0q4";

      case "butt":
        if (hero.hiddenEnd)
          return "https://www.youtube.com/watch?v=7pd9vE7NYU0";
        else return "https://www.youtube.com/watch?v=-VvjY_GYHa4";

      case "buttAgo":
        return "https://www.youtube.com/watch?v=ZtVrju_QeHs";

      case "lock1ng":
        if (hero.end) return "https://www.youtube.com/watch?v=GLrchVDvZ8M";
        else return "https://www.youtube.com/watch?v=BRoN7r_b0zk&";
    }
  };

  return (
    <div className={hero.end ? "happy-end" : "bad-end"}>
      {timeLeft ? (
        <ReactPlayer url={getUrl()} />
      ) : hero.name === "lee" ? (
        <div className={"end"}>沒有人發現你。</div>
      ) : (
        <div className={"end"}>End</div>
      )}
    </div>
  );
}

export default Scene6;

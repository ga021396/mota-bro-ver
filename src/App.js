import React from "react";
import { useSelector } from "react-redux";
import { getCount } from "./store/count/selectors";
import { fetchCount } from "./store/count/action";
import { useDispatch } from "react-redux";
import Scene1 from "./pages/Scene1";
import Scene2 from "./pages/Scene2";
import Scene3 from "./pages/Scene3";
import Scene4 from "./pages/Scene4";
import Scene5 from "./pages/Scene5";
import Scene6 from "./pages/Scene6";
import Opening from "./pages/Opening";
import Doc from "./pages/Doc";
import Text from "./pages/Text";
import Sidebar from "./pages/Sidebar";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const stage = useSelector(getCount);
  const handleStart = () => {
    dispatch(fetchCount(1));
  };
  const handleExp = () => {
    dispatch(fetchCount(-1));
  };
  const handleback = () => {
    dispatch(fetchCount(0));
  };

  return (
    <div className="App">
      {stage === 0 && <Opening next={handleStart} exp={handleExp}></Opening>}
      {stage === -1 && <Doc back={handleback}></Doc>}
      {stage > 0 && <Sidebar stage={stage}></Sidebar>}
      <div>
        {stage === 1 && <Scene1></Scene1>}
        {stage === 2 && <Scene2></Scene2>}
        {stage === 3 && <Scene3></Scene3>}
        {stage === 4 && <Scene4></Scene4>}
        {stage >= 5 && <Scene5></Scene5>}
        {stage > 0 && <Text></Text>}
      </div>
      {stage === 6 && <Scene6></Scene6>}
    </div>
  );
}

export default App;

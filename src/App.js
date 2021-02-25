import React from "react";
import { useSelector } from "react-redux";
import { getCount } from "./store/count/selectors";
import { fetchCount } from "./store/count/action";
import { useDispatch } from "react-redux";
import Scene1 from "./pages/Scene1";
import Scene2 from "./pages/Scene2";
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
        {stage > 0 && <Text></Text>}
      </div>
    </div>
  );
}

export default App;

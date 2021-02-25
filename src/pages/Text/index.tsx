import "./text.scss";
import { useSelector } from "react-redux";
import { getMessage } from "../../store/count/selectors";

function Text() {
  const message = useSelector(getMessage) as string;
  return <div className="text-container">{message}</div>;
}

export default Text;

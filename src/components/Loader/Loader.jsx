import { ClockLoader } from "react-spinners";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.wrap}>
      <ClockLoader color="#222222" size={150} />
    </div>
  );
};

export default Loader;

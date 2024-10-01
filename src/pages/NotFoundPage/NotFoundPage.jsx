import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>PAGE NOT FOUND</h2>
      <Link to="/" className={s.link}>
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;

import { Navlist } from "../../atom/Navlist";
import styles from "./Header.module.css";
import logo from "../../asset/img/logo_dk_origin.png";

export const Header = () => {
  return (
    <div className={styles.Header__container}>
      <div>
        <img src={logo} width="300px" />
      </div>
      <div className={styles.header__nav}>
        {Navlist.map((prop, index) => {
          return <div key={index}>{prop.title}</div>;
        })}
      </div>
    </div>
  );
};

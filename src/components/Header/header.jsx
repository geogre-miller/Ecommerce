import BoxIcon from "./BoxIcon/boxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./styles.module.scss";
import Menu from "./Menu/menu";
import logo from "../../assets/icons/images/Logo-retina.png";
import reloadIcon from "../../assets/icons/svgs/reloadIcon.svg";
import heartIcon from "../../assets/icons/svgs/heartIcon.svg";
import cartIcon from "../../assets/icons/svgs/cartIcon.svg";

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox, container } =
    styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "153px",
              height: "53px",
            }}
          />
        </div>

        <div className={containerBox}>
          {dataMenu.slice(3, dataMenu.length).map((item) => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>

        <div className={containerBoxIcon}>
         <img  src={reloadIcon} alt = "reload Icon"/>
         <img  src={heartIcon} alt = "heart Icon"/>
         <img  src={cartIcon} alt = "cart Icon"/>

        </div>
      </div>
    </div>
  );
}

export default MyHeader;

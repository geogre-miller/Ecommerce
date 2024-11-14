import styles from "../styles.module.scss";
import fbIcon from "../../../assets/icons/svgs/fbIcon.svg";
import igIcon from "../../../assets/icons/svgs/instaIcon.svg";
import ytIcon from "../../../assets/icons/svgs/ytIcon.svg";

const boxIcon = ({ type, href }) => {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case "fb":
        return fbIcon;
      case "youtube":
        return ytIcon;
      case "ins":
        return igIcon;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
};

export default boxIcon;

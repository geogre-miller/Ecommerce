import styles from "../styles.module.scss";

function InfoCard({content, description, src}) {
  const { cardContainer, contentContainer, title, des } = styles;
  return (
    <div className={cardContainer}>
      <img src={src} alt="icon" width={40} height={41} />
      <div className={contentContainer}>
        <div className={title}>{content}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
}

export default InfoCard;

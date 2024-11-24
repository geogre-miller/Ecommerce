import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";

function CountdownBanner() {
  const { container, containerTimer, title, boxBtn } = styles;
  const targetDate = new Date("2025-01-01");
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The Classics Make A Comeback</p>
      <div className={boxBtn}>
        <Button content={"Buy Now"}></Button>
      </div>
    </div>
  );
}

export default CountdownBanner;

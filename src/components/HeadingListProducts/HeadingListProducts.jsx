import MainLayout from "@components/Layout/layout";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";


function HeadingListProducts() {
  const { container, containerItem } = styles;
  const targetDate = new Date("2025-01-01");
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner targetDate={targetDate} />
        <div>Count Down Timer</div>
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProducts;

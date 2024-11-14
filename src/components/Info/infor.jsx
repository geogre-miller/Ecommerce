import MainLayout from "@components/Layout/layout";
import { dataInfo } from "./constant";
import InfoCard from "../Info/InfoCard/infoCard";
import styles from "./styles.module.scss";

function Info() {
  const { container } = styles;
  return (
      <MainLayout>
        <div className={container}>
          {dataInfo.map((item) => {
            return <InfoCard content={item.title} description={item.description} src={item.src} />;
          })}
        </div>
      </MainLayout>
  );
}

export default Info;

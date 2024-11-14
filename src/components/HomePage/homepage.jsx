import Banner from "@components/Banner/banner";
import MyHeader from "@components/Header/header";
import style from "./styles.module.scss";

function HomePage() {
  const { container } = style;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;

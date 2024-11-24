import Banner from "@components/Banner/banner";
import MyHeader from "@components/Header/header";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import styles from "./styles.module.scss";
import Info from "@components/Info/infor";
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";

function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadingListProducts />
      </div>
    </div>
  );
}

export default HomePage;

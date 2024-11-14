import Button from "@components/Button/button";
import style from "./styles.module.scss";

function Banner() {
  const { container, content, title, des } = style;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04</h1>
        <div className={des}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button content={'Go to shop'} />
      </div>
    </div>
  );
}

export default Banner;

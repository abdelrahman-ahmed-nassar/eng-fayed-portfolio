import classes from "./About.module.scss";
import SectionTitle from "../UI/SectionTitle";

import pic from "../../assets/images/special.png";

const About = () => {
  return (
    <section className={classes["about"]}>
      <SectionTitle>about me</SectionTitle>
      <div className={classes["about__container"]}>
        <div className={classes["about__text-box"]}>
          <div>
            <p className={classes["about__paragraph"]}>
              Hello! My name is Abraham Fayed. I am a Passionate Graphic designer
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae maxime facilis quidem placeat minima cumque in autem animi tempore magnam.
            </p>
          </div>
        </div>
        <div className={classes["about__img-box"]}>
          <div className={classes["img-container"]}>
            <img
              className="img"
              src={pic}
              alt="Ibrahim fayed"
              title="Ibrahim fayed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import designLogo from "../../images/design-logo.png";
import developmentLogo from "../../images/development-logo.svg";
import crochetLogo from "../../images/crochet-logo.webp";
import readingLogo from "../../images/reading-logo.webp";

export default function About() {
  return (
    <article className="about">
      <header>
        <h2 className="resume__title">About Me</h2>
      </header>

      <section className="about__text">
        <p>
          I'm Stephany Acosta, a versatile professional based in Panama with a
          passion for both technology and customer service. As a Web Developer
          and Virtual Assistant, I bring a unique blend of technical expertise
          and administrative proficiency to the table.
        </p>
      </section>

      <section className="about__services">
        <h3 className="about__service-title">What I'm doing</h3>

        <ul className="about__services-list">
          <li className="about__service-item">
            <div className="about__service-icon-box">
              <img
                src={designLogo}
                alt="design icon"
                className="about__service-item-logo"
              />
            </div>

            <div className="about__service-content-box">
              <h4 className="about__service-item-title">Web Design</h4>

              <p className="about__service-item-text">
                Crafting modern and high-quality designs at a professional
                level.
              </p>
            </div>
          </li>

          <li className="about__service-item">
            <div className="about__service-icon-box">
              <img
                src={developmentLogo}
                alt="Web development icon"
                className="about__service-item-logo"
              />
            </div>

            <div className="about__service-content-box">
              <h4 className="about__service-item-title">Web Development</h4>

              <p className="about__service-item-text">
                Delivering high-quality development of websites at the
                professional level.
              </p>
            </div>
          </li>

          <li className="about__service-item">
            <div className="about__service-icon-box">
              <img
                src={crochetLogo}
                alt="mobile app icon"
                className="about__service-item-logo"
              />
            </div>

            <div className="about__service-content-box">
              <h4 className="about__service-item-title">Crocheting</h4>

              <p className="about__service-item-text">
                Crafting intricate and artistic crochet designs with a
                professional touch.
              </p>
            </div>
          </li>

          <li className="about__service-item">
            <div className="about__service-icon-box">
              <img
                src={readingLogo}
                alt="camera icon"
                className="about__service-item-logo"
              />
            </div>

            <div className="about__service-content-box">
              <h4 className="about__service-item-title">Reading</h4>

              <p className="about__service-item-text">
                Learning a little every day, diving into coding, self-help,
                delving into other languages, and more.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

import { Tile } from "carbon-components-react";

const AboutMe = () => (
  <Tile className="content">
    <div className="tmp" />
    <div className="content-items justify-content-center">
      <div className="aboutme-item">
        <img width="300" height="300" src="./profile.jpeg" alt="profile" />
      </div>
      <div className="aboutme-item">
        <p>
          {" "}
          Hi, I&aposm Pierre Monier. I&aposm a Software Developer from France
          🇫🇷. I love solving problems with code, I&aposm passionate about all
          kinds of computer science 💻. Open-source enthusiast, I love working
          on projects with peoples around the world. I&aposm also a running
          addict 🏃.{" "}
        </p>
      </div>
    </div>
  </Tile>
);

export default AboutMe;

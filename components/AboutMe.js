import { Loading, Tile } from "carbon-components-react";

const AboutMe = () => (
  <Tile className="content">
    <div className="tmp" />
    <div className="content-items justify-content-center">
      <div className="aboutme-item">
        <img width="300" height="300" src="/profile.jpeg" alt="profile" />
      </div>
      <div className="aboutme-item">
        <p>
          {" "}
          « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. »{" "}
        </p>
      </div>
    </div>
  </Tile>
);

export default AboutMe;

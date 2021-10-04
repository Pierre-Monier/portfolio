import { Tile, Grid, Row, Column } from "carbon-components-react";

const AboutMe = () => (
  <Tile className="content">
    <div className="tmp" />
    <Grid>
      <Row className="content-items">
        <Column sm={12} className="content-item">
          <img width="300" height="300" src="./profile.jpeg" alt="profile" />
        </Column>
        <Column sm={12} className="content-item">
          <p>
            {" "}
            « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum. »{" "}
          </p>
        </Column>
      </Row>
    </Grid>
  </Tile>
);

export default AboutMe;

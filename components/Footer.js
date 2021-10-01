import { Tile, Link } from "carbon-components-react";
import {
  LogoDiscord24,
  LogoTwitter24,
  LogoGithub24,
  LogoKeybase24,
} from "@carbon/icons-react";

const Footer = () => (
  <Tile className="footer">
    <div className="footer-items">
      <Link className="footer-item" href="#" renderIcon={LogoGithub24}>
        Github
      </Link>
      <Link className="footer-item" href="#" renderIcon={LogoKeybase24}>
        Keybase
      </Link>
      <Link className="footer-item" href="#" renderIcon={LogoDiscord24}>
        Discord
      </Link>
      <Link className="footer-item" href="#" renderIcon={LogoTwitter24}>
        Twitter
      </Link>
    </div>
  </Tile>
);

export default Footer;

import { Tile, Link } from "carbon-components-react";
import {
  LogoDiscord24,
  LogoGithub24,
  LogoKeybase24,
} from "@carbon/icons-react";
import { keybaseLink, discordLink } from "../utils/link";

const Footer = () => (
  <Tile className="footer">
    <div className="footer-items">
      <Link
        className="footer-item"
        href="https://github.com/Pierre-Monier"
        renderIcon={LogoGithub24}
      >
        Github
      </Link>
      <Link
        className="footer-item"
        href={keybaseLink}
        renderIcon={LogoKeybase24}
      >
        Keybase
      </Link>
      <Link
        className="footer-item"
        href={discordLink}
        renderIcon={LogoDiscord24}
      >
        Discord
      </Link>
    </div>
  </Tile>
);

export default Footer;

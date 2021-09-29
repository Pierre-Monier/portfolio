import {
  HeaderContainer,
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SideNavDivider,
  Fade16,
  Button,
} from "carbon-components-react";
import {
  Add16,
  Email16,
  LogoGithub16,
  LogoTwitter16,
  SkillLevelAdvanced16,
  LinuxAlt32,
  Download32,
  Idea32,
  LogoDiscord32,
  LogoLinkedIn32,
  Asleep32,
  Awake32,
  Education32,
} from "@carbon/icons-react";

const Menu = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="todo">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="TOTO">
            [Platform]
          </HeaderName>
          <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
            <SideNavItems>
              <div>
                <h3>Pierre Monier</h3>
                <img style={{ height: "400px" }} src="./profile.jpeg" alt="" />
                <div>
                  <Button hasIconOnly>
                    <Add16 />
                  </Button>
                  <Button hasIconOnly>
                    <Add16 />
                  </Button>
                </div>
              </div>
              <SideNavDivider />
              <SideNavLink>A propos</SideNavLink>
              <SideNavLink renderIcon={SkillLevelAdvanced16}>
                Compétences
              </SideNavLink>
              <SideNavLink>Presentation</SideNavLink>
              <SideNavLink>Parcours</SideNavLink>
              <SideNavLink>Extras</SideNavLink>
              <SideNavLink renderIcon={Email16}>Contact</SideNavLink>
              <SideNavDivider />
              <SideNavLink renderIcon={LogoGithub16}>Github</SideNavLink>
              <SideNavLink renderIcon={LogoTwitter16}>Twitter</SideNavLink>
              <SideNavLink renderIcon={LogoGithub16}>Stackoverflow</SideNavLink>
              <SideNavDivider />
            </SideNavItems>
          </SideNav>
        </Header>
      </>
    )}
  />
);

export default Menu;

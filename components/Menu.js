import {
  HeaderContainer,
  Header,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderSideNavItems,
} from "carbon-components-react";
import { Awake24, Asleep24 } from "@carbon/icons-react";
import { useCallback, useEffect, useState } from "react";

const Menu = () => {
  const [theme, setTheme] = useState("g90");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(
    (currentTheme) => (currentTheme === "g90" ? "g10" : "g90"),
    []
  );

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="header" className="header">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderNavigation
              aria-label="navigation"
              aria-labelledby="navigation"
            >
              <HeaderMenuItem href="#">About Me</HeaderMenuItem>
              <HeaderMenuItem href="#">Projects</HeaderMenuItem>
              <HeaderMenuItem href="#">Contact</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="theme switcher"
                onClick={() => setTheme(toggleTheme(theme))}
              >
                {theme === "g90" ? <Awake24 /> : <Asleep24 />}
              </HeaderGlobalAction>
            </HeaderGlobalBar>

            <SideNav
              className="sidenav"
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
            >
              <HeaderSideNavItems hasDivider={true}>
                <HeaderMenuItem href="/">About Me</HeaderMenuItem>
                <HeaderMenuItem href="/projects">Projects</HeaderMenuItem>
                <HeaderMenuItem href="/contact">Contact</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  );
};

export default Menu;

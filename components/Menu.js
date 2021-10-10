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
import { useCallback, useEffect, useMemo, useState } from "react";

const Menu = () => {
  useEffect(() => {
    document.documentElement.setAttribute("theme", "g90");
  }, []);

  const basePath = useMemo(
    () => (process.env.NODE_ENV === "production" ? "/portfolio" : ""),
    []
  );

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="header" className="header">
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderNavigation
              aria-label="navigation"
              aria-labelledby="navigation"
            >
              <HeaderMenuItem href={`${basePath}/`}>About Me</HeaderMenuItem>
              <HeaderMenuItem href={`${basePath}/projects`}>
                Projects
              </HeaderMenuItem>
              <HeaderMenuItem href={`${basePath}/contact`}>
                Contact
              </HeaderMenuItem>
            </HeaderNavigation>

            <SideNav
              className="sidenav"
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
            >
              <HeaderSideNavItems hasDivider={true}>
                <HeaderMenuItem href={`${basePath}/`}>About Me</HeaderMenuItem>
                <HeaderMenuItem href={`${basePath}/projects`}>
                  Projects
                </HeaderMenuItem>
                <HeaderMenuItem href={`${basePath}/contact`}>
                  Contact
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  );
};

export default Menu;

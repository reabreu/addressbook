import React from "react";
import { useSelector } from "react-redux";
import { selectActiveLanguage } from "../../features/settings/settings-slice";
import { Ul, Li, NavbarLink, Nav, NavWrapper } from "./styles";
import SearchBar from "./SearchBar";

export default () => {
  const activeLanguage = useSelector(selectActiveLanguage);

  return (
    <NavWrapper>
      <Nav>
        <Ul>
          <Li>
            <NavbarLink to="/">Home</NavbarLink>
          </Li>
          <Li>
            <NavbarLink to="/settings">Settings</NavbarLink>
          </Li>
          <Li>
            <SearchBar />
          </Li>
        </Ul>
        <p>Active language is {`${activeLanguage}`}</p>
      </Nav>
    </NavWrapper>
  );
};

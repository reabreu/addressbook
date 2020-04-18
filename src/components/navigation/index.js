import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActiveLanguage } from "../../features/settings/settings-slice";
import { Ul, Li, NavbarLink, Nav } from "./styles";

export default () => {
  const activeLanguage = useSelector(selectActiveLanguage);

  return (
    <Nav>
      <Ul>
        <Li>
          <NavbarLink to="/">Home</NavbarLink>
        </Li>
        <Li>
          <NavbarLink to="/settings">Settings</NavbarLink>
        </Li>
      </Ul>
      <p>Active language is {`${activeLanguage}`}</p>
    </Nav>
  );
};

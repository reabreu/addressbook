import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { selectUsers, fetchUsers } from "./users-slice";
import { selectActiveLanguage } from "../settings/settings-slice";
import { Ol, Li, Thumbnail } from "./styles";

const filterUsersPerLang = (users, activeLanguage) =>
  users.filter((user) => user.nat === activeLanguage);

// If this selector were to be used in many components we chould hoist it to its own module
// leaving if here for now
const selectUsersPerLang = createSelector(
  selectUsers,
  selectActiveLanguage,
  filterUsersPerLang
);

export default () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(selectActiveLanguage);
  const filteredUsers = useSelector(selectUsersPerLang);

  useEffect(() => {
    if (!filteredUsers.length) dispatch(fetchUsers(activeLanguage));
  });

  return (
    <Ol>
      {filteredUsers.map(({ name, picture }, index) => (
        <Li key={`${name.first}-${index}`}>
          <Thumbnail src={picture.thumbnail} />
          <p>{name.first}</p>
        </Li>
      ))}
    </Ol>
  );
};

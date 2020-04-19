import React from "react";
import { Ol, Li, Thumbnail } from "./styles";

export default ({ users, setSelectedUser, setIsOpen }) => (
  <Ol>
    {users.map(({ name, picture, login, email }, index) => (
      <Li
        key={`${name.first}-${index}`}
        onClick={() => {
          setSelectedUser(users[index]);
          setIsOpen(true);
        }}
      >
        <Thumbnail src={picture.thumbnail} />
        <p>{`${name.first} ${name.last}`}</p>
        <p>{login.username}</p>
        <p>{email}</p>
      </Li>
    ))}
  </Ol>
);

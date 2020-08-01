import React from "react";
import { Tr, Thumbnail, ImageCell } from "./styles";
import Favorite from "./Favorite";

export default ({ index, setFavorite, onClick, user }) => (
  <Tr onClick={() => onClick(user)}>
    <ImageCell>
      <Thumbnail src={user.picture.thumbnail} />
    </ImageCell>
    <td>
      <p>{`${user.name.first} ${user.name.last}`}</p>
    </td>
    <td>
      <p>{user.login.username}</p>
    </td>
    <td>
      <p>{user.email}</p>
    </td>
    <td>
      <Favorite
        return
        index={index}
        favorite={user.favorite}
        setFavorite={(e) => setFavorite(e, user.id.value)}
      />
    </td>
  </Tr>
);

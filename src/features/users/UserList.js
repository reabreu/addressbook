import React from "react";
import { Table, Th } from "./styles";
import UserRow from "./UserRow";

const MemoizedUserRow = React.memo(UserRow);

export default ({ users, openModal, setFavorite }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Photo</Th>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>email</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <MemoizedUserRow
            key={user.id.value}
            setFavorite={setFavorite}
            index={index}
            onClick={openModal}
            user={user}
          />
        ))}
      </tbody>
    </Table>
  );
};

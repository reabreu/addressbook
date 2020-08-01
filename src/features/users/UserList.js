import React from "react";
import { Table, Tr, Thumbnail, ImageCell, Th } from "./styles";

export default ({ users, setSelectedUser, setIsOpen }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Photo</Th>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>email</Th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, picture, login, email }, index) => (
          <Tr
            key={`${name.first}-${index}`}
            onClick={() => {
              setSelectedUser(users[index]);
              setIsOpen(true);
            }}
          >
            <ImageCell>
              <Thumbnail src={picture.thumbnail} />
            </ImageCell>
            <td>
              <p>{`${name.first} ${name.last}`}</p>
            </td>
            <td>
              <p>{login.username}</p>
            </td>
            <td>
              <p>{email}</p>
            </td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

// (
//   <Ol>
//     {users.map(({ name, picture, login, email }, index) => (
//       <Li
//         key={`${name.first}-${index}`}
//         onClick={() => {
//           setSelectedUser(users[index]);
//           setIsOpen(true);
//         }}
//       >
//         <Thumbnail src={picture.thumbnail} />
//         <p>{`${name.first} ${name.last}`}</p>
//         <p>{login.username}</p>
//         <p>{email}</p>
//       </Li>
//     ))}
//   </Ol>
// )

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUsersPerLangAndSearch } from "./users-slice";
import UserDetailsModal from "./UserDetailsModal";
import UserList from "./UserList";
import UserLoadingTrigger from "./UserLoadingTrigger";

export default () => {
  // Store Selectors
  const filteredUsers = useSelector(selectUsersPerLangAndSearch);

  // Local state
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(filteredUsers[0]);

  return (
    <>
      <UserDetailsModal
        selectedUser={selectedUser}
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      />
      <UserList
        users={filteredUsers}
        setSelectedUser={setSelectedUser}
        setIsOpen={setIsOpen}
      />
      <UserLoadingTrigger />
    </>
  );
};

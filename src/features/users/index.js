import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsersPerLangAndSearch } from "./users-slice";
import UserDetailsModal from "./UserDetailsModal";
import UserList from "./UserList";
import UserLoadingTrigger from "./UserLoadingTrigger";
import { setFavorite } from "./users-slice";

export default () => {
  // Store Selectors
  const filteredUsers = useSelector(selectUsersPerLangAndSearch);

  // Local state
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(filteredUsers[0]);

  // Memoized actions creators so we dont re-render rows unnecessarily when favoriting
  const dispatch = useDispatch();

  const setFavMemoized = useCallback(
    (e, value) => {
      e.stopPropagation();
      dispatch(setFavorite({ value }));
    },
    [dispatch]
  );

  const openModalMemoized = useCallback(
    (user) => {
      setSelectedUser(user);
      setIsOpen(true);
    },
    [setSelectedUser, setIsOpen]
  );

  return (
    <>
      <UserDetailsModal
        selectedUser={selectedUser}
        modalIsOpen={modalIsOpen}
        closeModal={() => setIsOpen(false)}
      />
      <UserList
        users={filteredUsers}
        openModal={openModalMemoized}
        setFavorite={setFavMemoized}
      />
      <UserLoadingTrigger />
    </>
  );
};

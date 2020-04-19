import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  selectUsersPerLang,
  fetchUsers,
  selectPagesFetch,
} from "./users-slice";
import { selectActiveLanguage } from "../settings/settings-slice";
import UserDetailsModal from "./UserDetailsModal";
import UserList from "./UserList";
import UserLoadingTrigger from "./UserLoadingTrigger";

export default () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(selectActiveLanguage);
  const filteredUsers = useSelector(selectUsersPerLang);
  const pagesFetch = useSelector(selectPagesFetch);
  const [ref, inView] = useInView({ rootMargin: "600px 0px" });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(filteredUsers[0]);

  useEffect(() => {
    if (inView) dispatch(fetchUsers(activeLanguage, pagesFetch + 1));
  }, [inView]);

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
      <UserLoadingTrigger
        element={ref}
        showLoader={filteredUsers.length < 1000}
      />
    </>
  );
};

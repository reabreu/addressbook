import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  selectUsersPerLang,
  fetchUsers,
  selectPagesFetch,
} from "./users-slice";
import { selectActiveLanguage } from "../settings/settings-slice";
import { Ol, Li, Thumbnail, Loading, Loader } from "./styles";
import UserDetailsModal from "./modal";

export default () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(selectActiveLanguage);
  const filteredUsers = useSelector(selectUsersPerLang);
  const pagesFetch = useSelector(selectPagesFetch);
  const [ref, inView] = useInView({ rootMargin: "600px 0px" });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(filteredUsers[0]);
  console.log("selectedUser", selectedUser);
  useEffect(() => {
    if (inView) dispatch(fetchUsers(activeLanguage, pagesFetch + 1));
  }, [inView]);

  return (
    <>
      {selectedUser && (
        <UserDetailsModal
          selectedUser={selectedUser}
          modalIsOpen={modalIsOpen}
          closeModal={() => setIsOpen(false)}
        />
      )}
      <Ol>
        {filteredUsers.map(({ name, picture }, index) => (
          <Li
            key={`${name.first}-${index}`}
            onClick={() => {
              setSelectedUser(filteredUsers[index]);
              setIsOpen(true);
            }}
          >
            <Thumbnail src={picture.thumbnail} />
            <p>{name.first}</p>
          </Li>
        ))}
      </Ol>
      {filteredUsers.length < 1000 ? (
        <Loading ref={ref}>
          <Loader />
        </Loading>
      ) : null}
    </>
  );
};

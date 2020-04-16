import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, fetchUsers } from "./users-slice";

export default () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) dispatch(fetchUsers());
  });

  return (
    <>
      {users.map(({ name }, index) => {
        return <p key={`${name.first}-${index}`}>{name.first}</p>;
      })}
    </>
  );
};

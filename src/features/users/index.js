import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import {
  selectUsersPerLang,
  fetchUsers,
  selectPagesFetch,
  selectStatus,
} from "./users-slice";
import { selectActiveLanguage } from "../settings/settings-slice";
import { Ol, Li, Thumbnail, Loading, Loader } from "./styles";
import { useInView } from "react-intersection-observer";

export default () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(selectActiveLanguage);
  const filteredUsers = useSelector(selectUsersPerLang);
  const pagesFetch = useSelector(selectPagesFetch);
  const [ref, inView] = useInView({ rootMargin: "600px 0px" });

  useEffect(() => {
    if (inView) dispatch(fetchUsers(activeLanguage, pagesFetch + 1));
  }, [inView]);

  return (
    <>
      <Ol>
        {filteredUsers.map(({ name, picture }, index) => (
          <Li key={`${name.first}-${index}`}>
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

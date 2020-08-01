import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import {
  selectUsersPerLangAndSearch,
  fetchUsers,
  selectPagesFetch,
  selectStatus,
  STATUS,
} from "./users-slice";
import { selectSearchTerm } from "../navigation/search-slice";
import { selectActiveLanguage } from "../settings/settings-slice";
import { Loader, Loading } from "./styles";

const MAX_USERS = 200;

export default () => {
  // Store Selectors
  const dispatch = useDispatch();
  const activeLanguage = useSelector(selectActiveLanguage);
  const status = useSelector(selectStatus);
  const searchTerm = useSelector(selectSearchTerm);
  const pagesFetch = useSelector(selectPagesFetch);
  const filteredUsers = useSelector(selectUsersPerLangAndSearch);

  // Memoized fetch more users
  // can be auto fired via Intersection Observer or on demand by user click
  const fetchMore = useCallback(
    () => dispatch(fetchUsers(activeLanguage, pagesFetch + 1)),
    [activeLanguage, pagesFetch, dispatch]
  );

  // Intersection Observer Hook
  const [ref, inView] = useInView({ rootMargin: "600px 0px" });

  useEffect(() => {
    if (inView) fetchMore();
  }, [inView, fetchMore]);

  const maxUsersReached = filteredUsers.length === MAX_USERS;
  const searchNotSet = searchTerm === "";
  const fetchError = status === STATUS.ERROR;
  const isFetching = status === STATUS.FETCHING;

  const setRef = !maxUsersReached && searchNotSet && !fetchError && !isFetching;
  const showLoader = !fetchError && !maxUsersReached;
  const showEndCatalogMessage = maxUsersReached && searchNotSet;

  // Only set ref for intersection observer if we fulfill the conditions on wich it should auto fire
  const loadingRef = setRef ? ref : null;

  return (
    <Loading ref={loadingRef}>
      {showLoader && <Loader />}
      {showEndCatalogMessage && <label>End of users catalog</label>}
      {fetchError && (
        <button onClick={fetchMore}>
          There was an error fetching users, click here to try again
        </button>
      )}
    </Loading>
  );
};

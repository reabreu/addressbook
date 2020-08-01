import React from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { useLocation } from "react-router-dom";
import { SearchInput } from "./styles";
import { setSearchTerm } from "./search-slice";
import { selectSearchTerm } from "../navigation/search-slice";

const SEARCH_DEBOUNCE_INTERVAL = 300;

export default () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const debouncedDispatch = debounce(dispatch, SEARCH_DEBOUNCE_INTERVAL);
  const searchTerm = useSelector(selectSearchTerm);

  return location.pathname === "/" ? (
    <SearchInput
      onChange={(e) => debouncedDispatch(setSearchTerm(e.target.value))}
      placeholder="Search something here"
      defaultValue={searchTerm}
    />
  ) : null;
};

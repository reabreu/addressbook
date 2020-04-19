import React from "react";
import { useLocation } from "react-router-dom";
import { SearchInput } from "./styles";
import { setSearchTerm } from "./search-slice";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

const SEARCH_DEBOUNCE_INTERVAL = 300;

export default () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const debouncedDispatch = debounce(dispatch, SEARCH_DEBOUNCE_INTERVAL);

  return location.pathname === "/" ? (
    <SearchInput
      onChange={(e) => debouncedDispatch(setSearchTerm(e.target.value))}
      placeholder="Search something here"
    />
  ) : null;
};

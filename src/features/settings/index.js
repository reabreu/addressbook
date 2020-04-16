import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveLanguage,
  selectLanguages,
  setActiveLanguage,
} from "./settings-slice";
import { Panel } from "./styles";

export default () => {
  const activeLanguage = useSelector(selectActiveLanguage);
  const languages = useSelector(selectLanguages);
  const dispatch = useDispatch();

  return (
    <Panel>
      <p>
        Your active language is {`${activeLanguage}`}, use the select box bellow
        to change this
      </p>
      <select onChange={(e) => dispatch(setActiveLanguage(e.target.value))}>
        {languages.map((lang) => (
          <option selected={lang === activeLanguage} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </Panel>
  );
};

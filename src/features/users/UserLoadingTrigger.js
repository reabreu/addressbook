import React from "react";
import { Loading, Loader } from "./styles";

export default ({ element, showLoader, showEndResults }) => {
  if (showLoader) {
    return (
      <Loading ref={element}>
        <Loader />
      </Loading>
    );
  }

  if (showEndResults) {
    return (
      <Loading>
        <label>End of users catalog</label>
      </Loading>
    );
  }

  return null;
};

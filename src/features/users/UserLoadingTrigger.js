import React from "react";
import { Loading, Loader } from "./styles";

export default ({ element, showLoader }) =>
  showLoader ? (
    <Loading ref={element}>
      <Loader />
    </Loading>
  ) : null;

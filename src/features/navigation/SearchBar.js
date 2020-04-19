import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid darkgray;
  width: 400px;
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 5px;
`;

export default () => <Input placeholder="Search something here" />;

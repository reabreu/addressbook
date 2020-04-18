import styled from "styled-components";

export const Li = styled.li`
  padding: 3px 10px;
  margin-bottom: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  background-color: transparent;
  transition: background-color 0.35s ease;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const Ol = styled.ol`
  padding: 0 5px;
`;

export const Thumbnail = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  display: block;
  border: 1px solid lightgray;
`;

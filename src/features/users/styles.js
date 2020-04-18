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
  padding: 0 0 5px 0;
  margin: 0;
`;

export const Thumbnail = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  display: block;
  border: 1px solid lightgray;
`;

export const Loading = styled.div`
  box-sizing: border-box;
  border: 1px solid lightgray;
  height: 58px;
  text-align: center;
  line-height: 54px;
  transition: ;
`;

export const Loader = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;

  &:after {
    content: " ";
    display: block;
    width: 18px;
    height: 18px;
    margin: 12px;
    border-radius: 50%;
    border: 3px solid black;
    border-color: black transparent black transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

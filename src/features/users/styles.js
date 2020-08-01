import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding-bottom: 10px;
`;

export const Tr = styled.tr`
  width: 100%;
  text-align: center;
  transition: background-color 0.35s ease;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const ImageCell = styled.td`
  display: flex;
  justify-content: center;
`;

export const Thumbnail = styled.img`
  border-radius: 50%;
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

export const Center = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 0 15px 0 0;
  color: white;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
`;

export const NavWrapper = styled.div`
  min-height: 60px;
`;

export const Ul = styled.div`
  list-style-type: none;
  display: flex;
`;

export const Li = styled.li`
  text-align: center;
  padding: 14px 16px;
`;

export const NavbarLink = styled(Link)`
  color: #f2f2f2;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    color: black;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid darkgray;
  width: 400px;
  padding: 3px 8px;
  font-size: 14px;
  border-radius: 5px;
`;

import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Search from '@mui/icons-material/Search';
import React from 'react';
import styled from 'styled-components';
import { HelpOutline } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  // console.log(user)

  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar onClick={() => auth.signOut()} alt={user?.displayName} src={user?.photoURL} />
            <AccessTimeIcon />
        </HeaderLeft>
        <HeaderSearch>
          <Search />
          <input type="text" placeholder="Search CODER" />
        </HeaderSearch>
        <HeaderRight>
          <HelpOutline />
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderContainer = styled.div`
   display: flex;
   position: fixed;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding: 10px 0;
   background-color: var(--slack-color);
   color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
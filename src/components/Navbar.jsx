import { Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import  styled  from 'styled-components';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const Container = styled.div`
height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language=styled.span`
  font-style: 14px;
  cursor: pointer;
`
const SearchInput= styled.input`
  padding: 5px;
  border: none;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const MenuItem=styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-right: 25px;
`
const Center = styled.div`
  flex: 1;
`

const Logo=styled.h1`
  font-weight: bold;
  text-align: center;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
        <SearchContainer>
          <SearchInput />
          <Search style={{color:"gray",fontSize:"14px"}}/>
        </SearchContainer>
        </Left>
        <Center>
        <Logo>Trinadh</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={1} color="primary">
              <AddShoppingCartOutlinedIcon />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
import React, { useContext } from "react";
import { MeetupsListContext } from '../../contexts/meetupListContext'; 
import styled from "styled-components";
import { Link } from "react-router-dom";
import Badge from '../ui/Badge'

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
`

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #77002e;
  padding: 0 10%;
`

const Logo = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`

const ItemContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`

const Item = styled.li`
  margin-left: 3rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fcb8d2;

  &:hover {
    color: white;
  }
`

const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
`

export default function MainNavigation() {

  const { favoriteMeetups } = useContext(MeetupsListContext)

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <Navbar id="navbar">
      <Header  data-test="navigation-header">
        <Logo>React Meetups</Logo>
        <nav>
          <ItemContainer>
            <Item>
              <StyledLink to="/">
              All Meetups
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="/newmeetup">
                Add New Meetup
              </StyledLink>
            </Item>
            <Item>
              <FavoritesContainer>
                <StyledLink to="/favorites">
                  My Favorites            
                </StyledLink>
                <Badge amount={favoriteMeetups.length}/>
              </FavoritesContainer>
            </Item>
          </ItemContainer>
        </nav>
      </Header>
  </Navbar>
  );
}

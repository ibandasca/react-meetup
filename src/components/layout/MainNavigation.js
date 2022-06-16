import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  position: fixed;
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
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

export default function MainNavigation() {

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
              <StyledLink to="/favorites">
                My Favorites            
              </StyledLink>
            </Item>
          </ItemContainer>
        </nav>
      </Header>
  </Navbar>
  );
}

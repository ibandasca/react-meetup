import React, { useContext } from "react";
import styled from "styled-components";
import { MeetupsListContext } from "../../contexts/meetupListContext";
import Card from "../ui/Card";

const Item = styled.li`
  margin: 1rem 0;
`;

const Image = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  text-align: center;
  padding: 1rem;

  & > h3 {
    font-size: 1.25rem;
    color: #2c292b;
  }
`;

const Actions = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  color: #77002e;
  border: 1px solid #77002e;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;

  &:hover {
    background-color: #ffe2ed;
  }
`;

export default function MeetupItem({ item }) {
  const { favoriteMeetups, setFavoriteMeetups } =
    useContext(MeetupsListContext);

  const handleAddToFavorite = (id) => {
    const isElementAFavoriteOne = favoriteMeetups.find(
      (element) => element.id === id
    );
    if (!isElementAFavoriteOne) setFavoriteMeetups([...favoriteMeetups, item]);
  };

  return (
    <Item data-test="meet-up-item">
      <Card>
        <Image>
          <img src={item.image} alt={item.title} />
        </Image>
        <Content>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </Content>
        <Actions>
          <StyledButton
            onClick={() => handleAddToFavorite(item.id)}
            data-testid="add-to-favorites-button"
          >
            Add to favorites
          </StyledButton>
        </Actions>
      </Card>
    </Item>
  );
}

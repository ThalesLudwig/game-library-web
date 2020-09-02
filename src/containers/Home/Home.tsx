import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { Container, Loading } from "./HomeStyled";
import Game from "../../models/Game";
import GameService from "../../services/gameService";
import { useSelector } from "react-redux";
import { getSearch } from "../../app/searchSlice";

const renderGamesList = (games: Array<Game>): Array<Object> => {
  const list: Array<Object> = [];
  games.forEach((game: Game) =>
    list.push(
      <Card
        color={game.dominant_color}
        image={game.background_image}
        name={game.name}
        key={game.slug}
      />
    )
  );
  return list;
};

const Home = () => {
  const search = useSelector(getSearch);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [games, setGames] = useState<Array<Game>>([]);

  useEffect(() => {
    if (!!search) {
      setIsLoading(true);
      const gameService: GameService = new GameService();
      gameService
        .getByName(search)
        .then((res) => {
          setGames(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setHasError(true);
          throw new Error(err);
        });
    }
  }, [search]);

  return isLoading && !hasError ? (
    <Loading>Loading...</Loading>
  ) : (
    <Container>{renderGamesList(games)}</Container>
  );
};

export default Home;

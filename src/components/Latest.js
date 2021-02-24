import styled from "styled-components";
import { Link } from "react-router-dom";

const data = [
  {
    songname: "Song: When I'm low",
    songrelease: 2015,
    play: "Platform: Youtube",
    id: "SongID #2221",
    image: "https://i.ytimg.com/vi/lMvZPrXBguQ/maxresdefault.jpg",
  },
  {
    songname: "Song: G.O.M.D",
    songrelease: 2018,
    play: "Platform: Youtube",
    id: "SongID #2222",
    image:
      "https://cutewallpaper.org/21/sickick-wallpapers/Sickick-work-Wallpapers-Free-by-ZEDGEa_.jpg",
  },
  {
    songname: "Game: G.O.M.D",
    songrelease: 2020,
    play: "Platform: Youtube",
    id: "SongID #2223",
    image:
      "https://images.genius.com/6c647a8d6f595d09f1a3a30bfe596003.600x600x1.jpg",
  },
];

export const List = () => {
  return (
    <div>
      {data.map((item) => (
        <ProductItemWrapper>
          <ProductImage src={item.image} />
          <h3>{item.songname}</h3>
          <p>{item.songrelease}</p>
          <p>{item.play}</p>
          <a href="https://www.youtube.com/watch?v=f2c7OAUuPnE">
            <p>{item.id}</p>
          </a>
        </ProductItemWrapper>
      ))}
    </div>
  );
};

const ProductItemWrapper = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: burlywood;
  scroll-behavior: smooth;
`;

const ProductImage = styled.img`
  justify-items: center;
  padding: 0.5rem;
  border-radius: 5rem;
  width: 400px;
  height: 250px;
`;

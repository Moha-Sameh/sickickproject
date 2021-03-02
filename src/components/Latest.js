import styled from "styled-components";
import dataStore from "./dataStore/dataStore";
import { observer } from "mobx-react";

const List = () => {
  return (
    <div>
      {dataStore.data.map((item) => (
        <ProductItemWrapper>
          <ProductImage src={item.image} />
          <h3>{item.songname}</h3>
          <p>{item.songrelease}</p>
          <p>{item.play}</p>
          <a href="https://www.youtube.com/watch?v=f2c7OAUuPnE">
            <p>{item.id}</p>
          </a>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </ProductItemWrapper>
      ))}
    </div>
  );
};
const handleDelete = (musicID) => {
  dataStore.deleteMusic(musicID);
};

const ProductItemWrapper = styled.div`
  display: grid;
  gridtemplatecolumns: 1fr 1fr 1fr 1fr;
  justifyitems: center;
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

export default observer(List);

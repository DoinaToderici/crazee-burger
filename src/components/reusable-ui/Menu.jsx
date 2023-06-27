import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../fakeData";
import Card from "./Card";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <StyledMenu>
      {menu &&
        menu.map(({ title, imageSource, price }, key) => {
          return (
            <Card
              title={title}
              imageSource={imageSource}
              price={price}
              key={key}
            ></Card>
          );
        })}
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
`;

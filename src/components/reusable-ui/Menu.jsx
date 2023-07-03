import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../fakeData";
import { formatPrice } from "../../utils/maths";
import AdminPanel from "./AdminPanel";
import Card from "./Card";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <StyledMenu>
      {menu &&
        menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              title={title}
              imageSource={imageSource}
              leftDescription={formatPrice(price)}
              key={id}
            ></Card>
          );
        })}
      <AdminPanel />
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
  position: relative;
`;

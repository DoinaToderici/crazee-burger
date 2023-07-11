import { useContext } from "react";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { AdminContext } from "../../../../Context/AdminContext";

import Card from "../../../../reusable-ui/Card";

export default function Menu() {
  const { menu } = useContext(AdminContext);

  return (
    <StyledMenu>
      {menu &&
        menu.map(({ id, title, imageSource, price }) => {
          return (
            <Card
              id={id}
              title={title}
              imageSource={imageSource}
              leftDescription={formatPrice(price)}
              key={id}
            ></Card>
          );
        })}
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  padding: 50px 50px 150px;
  overflow-y: scroll;
`;

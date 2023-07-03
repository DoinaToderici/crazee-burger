import { useContext, useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../../fakeData";
import { formatPrice } from "../../../../../utils/maths";
import Admin from "./Admin/Admin";
import Card from "../../../../reusable-ui/Card";
import { AdminContext } from "../../../../Context/AdminContext";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);
  const { isModeAdmin } = useContext(AdminContext);

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
      {isModeAdmin && <Admin />}
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

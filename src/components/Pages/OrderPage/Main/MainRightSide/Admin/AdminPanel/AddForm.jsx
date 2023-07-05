import React, { useContext } from "react";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import { AdminContext } from "../../../../../../Context/AdminContext";

export default function AddForm() {
  //state
  const { handleAdd } = useContext(AdminContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "New product",
    imageSource:
      "https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg",
    price: 2.5,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
  };

  return (
    <AddFormStylde onSubmit={(e) => handleSubmit(e)}>
      <div className="img-preview">img preview</div>

      <div className="input-fields">
        {/* <Input
          Icon={<FaHamburger />}
          label="Nom du produit (ex: Super Burger)"
        />
        <Input
          Icon={<BsFillCameraFill />}
          label="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <Input Icon={<MdOutlineEuro />} label="Prix" /> */}
      </div>
      <div className="submit-btn">
        <PrimaryButton label="Ajouter un nouveau produit au menu" />
      </div>
    </AddFormStylde>
  );
}

const AddFormStylde = styled.form`
  border: 1px solid black;
  display: grid;
  height: 100%;
  width: 70vw;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .img-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
  }

  .submit-btn {
    grid-area: 4 / 2 / 5 / 3;
    width: 50%;
  }
`;

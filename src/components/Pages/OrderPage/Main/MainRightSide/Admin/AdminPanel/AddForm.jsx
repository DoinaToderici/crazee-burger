import React, { useContext, useState } from "react";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import { AdminContext } from "../../../../../../Context/AdminContext";
import Input from "../../../../../../reusable-ui/Input";
import { inputsConfig } from "./inputsConfig";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: "",
};

export default function AddForm() {
  //state
  const { handleAdd } = useContext(AdminContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //functionement
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
    setNewProduct(EMPTY_PRODUCT);
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
      id: crypto.randomUUID,
    });
  };

  // affichage
  return (
    <AddFormStylde onSubmit={(e) => handleSubmit(e)}>
      <div className="img-preview">
        <img
          src={
            newProduct.imageSource
              ? newProduct.imageSource
              : "/images/coming-soon.png"
          }
          alt=""
          className="w-50"
        />
      </div>
      <div className="input-fields">
        {inputsConfig.map(({ Icon, placeholder, name }) => {
          return (
            <Input
              key={name}
              Icon={Icon}
              placeholder={placeholder}
              name={name}
              value={newProduct[name]}
              className="input-add-product-form"
              onChange={(e) => handleChange(e)}
            />
          );
        })}
      </div>
      <div className="submit-btn">
        <PrimaryButton label="Ajouter un nouveau produit au menu" />
      </div>
    </AddFormStylde>
  );
}

const AddFormStylde = styled.form`
  display: grid;
  height: 100%;
  width: 70vw;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .img-preview {
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;

    .input-add-product-form {
      padding: 0 10px;
      margin: 0;
    }
  }

  .submit-btn {
    grid-area: 4 / 2 / 5 / 3;
    width: 50%;
    margin-top: 10px;
  }
`;

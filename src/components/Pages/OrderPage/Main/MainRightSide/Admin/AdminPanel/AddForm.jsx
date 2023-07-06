import React, { useContext, useState } from "react";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
import { AdminContext } from "../../../../../../Context/AdminContext";
import Input from "../../../../../../reusable-ui/Input";
import { inputsConfig } from "./inputsConfig";
import { theme } from "../../../../../../../theme";
import { FiCheck } from "react-icons/fi";

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
  const [isAdded, setIsAdded] = useState(false);

  //functionement
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newProduct);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
      id: crypto.randomUUID,
    });
  };

  const displaySuccessMessage = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // affichage
  return (
    <AddFormStylde onSubmit={(e) => handleSubmit(e)}>
      <div className="img-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <span>Aucune image</span>
        )}
      </div>
      <div className="input-fields">
        {inputsConfig.map(({ Icon, placeholder, name }, key) => {
          return (
            <Input
              key={key}
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
        {isAdded && (
          <div className="check-msg">
            <FiCheck />
            <p> Ajouté avec succès !</p>
          </div>
        )}
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
    text-align: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
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
    margin-top: 10px;
    display: flex;
    align-items: center;

    button {
      width: 50%;
    }

    .check-msg {
      display: flex;
      align-items: center;
      color: ${theme.colors.green};
      margin: 0 0 0 10px;

      p {
        margin: 0 0 0 5px;
      }
    }
  }
`;

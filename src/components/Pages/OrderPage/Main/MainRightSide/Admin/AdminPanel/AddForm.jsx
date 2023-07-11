import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../../Context/AdminContext";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { inputsConfig } from "./inputsConfig";
import { theme } from "../../../../../../../theme";
import { FiCheck } from "react-icons/fi";
import Button from "../../../../../../reusable-ui/Button";

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
      <div
        className={`img-preview ${!newProduct.imageSource && "prev-not-img"}`}
      >
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <span>Aucune image</span>
        )}
      </div>
      <div className="input-fields">
        {inputsConfig.map(({ Icon, placeholder, name }, key) => {
          return (
            <TextInput
              key={key}
              Icon={Icon}
              placeholder={placeholder}
              name={name}
              value={newProduct[name]}
              onChange={(e) => handleChange(e)}
              version="minimalist"
            />
          );
        })}
      </div>
      <div className="submit-btn">
        <Button label="Ajouter un nouveau produit au menu" version="success" />
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
  max-height: 100%;
  width: 70%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .img-preview {
    grid-area: 1 / 1 / 4 / 2;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    &.prev-not-img {
      width: 100%;
      height: 100%;
      border-radius: ${theme.borderRadius.round};
      border: 1px solid ${theme.colors.greyLight};
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: top center;
    }
  }

  .input-fields {
    display: grid;
    grid-area: 1 / 2 / 4 / 3;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    margin-left: 8px;
  }

  .submit-btn {
    grid-area: 4 / 2 / 5 / 3;
    margin-top: 10px;
    display: flex;
    align-items: center;
    margin: 8px 0 0 8px;

    .check-msg {
      display: flex;
      align-items: center;
      color: ${theme.colors.success};
      margin: 0 0 0 10px;

      p {
        margin: 0 0 0 5px;
      }
    }
  }
`;

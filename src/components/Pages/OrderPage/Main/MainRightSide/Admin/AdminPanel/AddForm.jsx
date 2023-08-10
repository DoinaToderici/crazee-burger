import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AdminContext } from "../../../../../../Context/AdminContext";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { inputsConfig } from "./inputsConfig";
import ImgPreview from "./ImgPreview";
import SubmiSection from "./SubmiSection";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(AdminContext);
  const [isAdded, setIsAdded] = useState(false);

  //functionement
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ ...newProduct, id: new Date().valueOf() });
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const displaySuccessMessage = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // affichage
  return (
    <AddFormStyled onSubmit={(e) => handleSubmit(e)}>
      <ImgPreview newProduct={newProduct} />
      <div className="input-fields">
        {inputsConfig.map(({ Icon, placeholder, name }, key) => {
          return (
            <TextInput
              Icon={Icon}
              placeholder={placeholder}
              name={name}
              key={key}
              value={newProduct[name]}
              onChange={(e) => handleChange(e)}
              version="minimalist"
            />
          );
        })}
      </div>
      <SubmiSection isAdded={isAdded} />
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  max-height: 100%;
  width: 70%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .input-fields {
    display: grid;
    grid-area: 1 / 2 / 4 / 3;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    margin-left: 8px;
  }
`;

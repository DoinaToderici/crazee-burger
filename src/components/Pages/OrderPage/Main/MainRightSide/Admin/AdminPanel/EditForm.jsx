import React, { useContext } from "react";
import HintMessage from "./HintMessage";
import { AdminContext } from "../../../../../../Context/AdminContext";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { inputsConfig } from "./inputsConfig";
import ImgPreview from "./ImgPreview";
import styled from "styled-components";

export default function EditForm() {
  const { productSelected, setProductSelected, handleUpdate } =
    useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };
    setProductSelected(productBeingUpdated);
    handleUpdate(productBeingUpdated);
  };

  return (
    <EditFormStyled>
      {productSelected ? (
        <>
          <ImgPreview newProduct={productSelected} />

          <div className="input-fields">
            {inputsConfig.map(({ Icon, placeholder, name }, key) => {
              return (
                <TextInput
                  Icon={Icon}
                  placeholder={placeholder}
                  name={name}
                  key={key}
                  value={productSelected[name]}
                  onChange={(e) => handleChange(e)}
                  version="minimalist"
                />
              );
            })}
          </div>
        </>
      ) : (
        <HintMessage />
      )}
    </EditFormStyled>
  );
}
const EditFormStyled = styled.form`
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

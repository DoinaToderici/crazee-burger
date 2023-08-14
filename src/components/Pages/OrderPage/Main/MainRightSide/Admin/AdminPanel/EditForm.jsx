import React, { useContext } from "react";
import { AdminContext } from "../../../../../../Context/AdminContext";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { inputsConfig } from "./inputsConfig";
import ImgPreview from "./ImgPreview";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function EditForm() {
  const {
    productSelected,
    setProductSelected,
    handleUpdate,
    editTitleInputRef,
  } = useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };
    setProductSelected(productBeingUpdated);
    handleUpdate(productBeingUpdated);
  };
  return (
    <EditFormStyled>
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
              ref={name === "title" ? editTitleInputRef : null}
            />
          );
        })}
        <div className="submit">
          <span className="sentence">
            Cliquer sur un produit du menu pour le modifier{""}
            <span className="live-update"> en temps réel</span>
          </span>
        </div>
      </div>
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

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};

      .live-update {
        text-decoration: underline;
      }
    }
  }
`;

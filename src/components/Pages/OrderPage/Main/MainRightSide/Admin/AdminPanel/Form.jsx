import React from "react";
import styled from "styled-components";
import { inputsConfig } from "./inputsConfig";
import TextInput from "../../../../../../reusable-ui/TextInput";
import ImgPreview from "./ImgPreview";
import { theme } from "../../../../../../../theme";

const Form = React.forwardRef(
  ({ onSubmit, onChange, onFocus, onBlur, product, children }, ref) => {
    return (
      <FormStyled onSubmit={onSubmit}>
        <>
          <ImgPreview
            imgPreview={product.imageSource}
            imgPreviewAlt={product.title}
          />
          <div className="input-fields">
            {inputsConfig.map(({ Icon, placeholder, name }, key) => {
              return (
                <TextInput
                  Icon={Icon}
                  placeholder={placeholder}
                  name={name}
                  key={key}
                  value={product[name]}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  version="minimalist"
                  type={name === "price" ? "number" : ""}
                  ref={ref && name === "title" ? ref : null}
                />
              );
            })}
          </div>
          <div className="form-footer">{children}</div>
        </>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  display: grid;
  max-height: 100%;
  width: 70%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  @media (max-width: ${theme.medias.lg}) {
    width: 100%;
  }

  .input-fields {
    display: grid;
    grid-area: 1 / 2 / 4 / 3;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    margin-left: 8px;

    @media (max-width: ${theme.medias.sm}) {
      grid-area: 2 / 1 / 4 / 3;
      margin: 8px 0 0;
    }
  }

  .form-footer {
    grid-area: 4 / -2 / -1 / -1;
    align-items: center;
    position: relative;
    top: 3px;
    margin-left: 8px;

    @media (max-width: ${theme.medias.sm}) {
      margin-left: 0;
      grid-area: 4 / -1 / -1 / -4;
    }
  }
`;

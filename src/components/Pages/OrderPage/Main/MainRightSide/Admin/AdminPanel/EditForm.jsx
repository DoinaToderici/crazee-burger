import React, { useContext, useState } from "react";
import { AdminContext } from "../../../../../../Context/AdminContext";
import Form from "./Form";
import ModifProductMsg from "./ModifProductMsg";
import SentenceEditForm from "./SentenceEditForm";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  const {
    productSelected,
    setProductSelected,
    handleUpdate,
    editTitleInputRef,
  } = useContext(AdminContext);
  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmited: isChangedMsg, displaySuccessMessage } =
    useSuccessMessage();

  // COMPORTEMENT
  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value };
    setProductSelected(productBeingUpdated);
    handleUpdate(productBeingUpdated);
  };

  const handleOnFocus = (e) => {
    setValueOnFocus(e.target.value);
  };

  const handleOnBlur = (e) => {
    const valueOnBlur = e.target.value;

    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  return (
    <Form
      onChange={handleChange}
      product={productSelected}
      ref={editTitleInputRef}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isChangedMsg ? <ModifProductMsg /> : <SentenceEditForm />}
    </Form>
  );
}

import React, { useContext } from "react";
import { AdminContext } from "../../../../../../Context/AdminContext";
import Form from "./Form";
import SentenceEditForm from "./SentenceEditForm";

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
    <Form
      onChange={handleChange}
      product={productSelected}
      ref={editTitleInputRef}
    >
      <SentenceEditForm />
    </Form>
  );
}

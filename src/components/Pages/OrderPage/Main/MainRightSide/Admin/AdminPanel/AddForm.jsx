import React, { useContext, useState } from "react";
import { AdminContext } from "../../../../../../Context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import Form from "./Form";
import SubmitSection from "./SubmitSection";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(AdminContext);
  const { isSubmited, displaySuccessMessage } = useSuccessMessage();

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

  // affichage
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitSection isSubmited={isSubmited} />
    </Form>
  );
}

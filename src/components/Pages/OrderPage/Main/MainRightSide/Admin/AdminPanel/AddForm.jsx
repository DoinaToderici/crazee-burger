import React, { useContext, useState } from "react";
import { AdminContext } from "../../../../../../Context/AdminContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import Form from "./Form";
import SubmitSection from "./SubmitSection";

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(AdminContext);
  const [isSubmited, setIsSubmited] = useState(false);

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
    setIsSubmited(true);
    setTimeout(() => setIsSubmited(false), 2000);
  };

  // affichage
  return (
    <Form onSubmit={handleSubmit} onChange={handleChange} product={newProduct}>
      <SubmitSection isSubmited={isSubmited} />
    </Form>
  );
}

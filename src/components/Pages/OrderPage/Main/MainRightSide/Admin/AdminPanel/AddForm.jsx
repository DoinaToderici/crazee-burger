import React from "react";
import Input from "../../../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton";

export default function AddForm() {
  return (
    <div>
      <Input Icon={<FaHamburger />} label="Nom du produit (ex: Super Burger)" />
      {/* <Input
        Icon={<BsFillCameraFill />}
        label="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
      />
      <Input Icon={<MdOutlineEuro />} label="Prix" /> */}
      {/* <PrimaryButton label="Ajouter un nouveau produit au menu" />  */}
      add form
    </div>
  );
}

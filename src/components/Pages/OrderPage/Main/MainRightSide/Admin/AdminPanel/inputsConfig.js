import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const inputsConfig = [
  {
    Icon: <FaHamburger />,
    placeholder: "Nom du produit (ex: Super Burger)",
    name: "title",
  },
  {
    Icon: <BsFillCameraFill />,
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    name: "imageSource",
  },
  {
    Icon: <MdOutlineEuro />,
    placeholder: "Prix",
    name: "price",
  },
];

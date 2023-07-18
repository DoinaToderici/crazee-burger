import React, { useContext, useState } from "react";
import HintMessage from "./HintMessage";
import { AdminContext } from "../../../../../../Context/AdminContext";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { inputsConfig } from "./inputsConfig";

export default function EditForm() {
  const { productSelected, menu, setMenu } = useContext(AdminContext);
  const [changedProduct, setChangedProduct] = useState(undefined);

  // const handleChange = (e) => {
  //   // setChangedProduct({ ...productSelected, [e.target.name]: e.target.value });

  //   const modifiedMenu = menu.map((menuItem) => {
  //     if (menuItem.id === productSelected.id) {
  //       return { ...productSelected, [e.ta  rget.name]: e.target.value };
  //     } else {
  //       return menuItem;
  //     }
  //   });

  //   setMenu(modifiedMenu);
  // };

  return (
    <div>
      {productSelected ? (
        <form>
          {inputsConfig.map(({ Icon, placeholder, name }, key) => {
            return (
              <TextInput
                Icon={Icon}
                placeholder={placeholder}
                name={name}
                key={key}
                value={productSelected[name]}
                // onChange={(e) => handleChange(e)}
                version="minimalist"
              />
            );
          })}
        </form>
      ) : (
        <HintMessage />
      )}
    </div>
  );
}

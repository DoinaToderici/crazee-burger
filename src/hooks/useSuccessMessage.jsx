import { useState } from "react";

export const useSuccessMessage = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const displaySuccessMessage = () => {
    setIsSubmited(true);
    setTimeout(() => setIsSubmited(false), 2000);
  };

  return { isSubmited, displaySuccessMessage };
};

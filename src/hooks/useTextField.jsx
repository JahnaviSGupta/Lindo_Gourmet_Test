import { useState } from "react";

const useTextField = (
  initialValue = "",
  initialError = false,
  initialHelperText = "",
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(initialError);
  const [helperText, setHelperText] = useState(initialHelperText);

  return [
    value,
    setValue,
    error,
    setError,
    helperText,
    setHelperText];
};

export default useTextField;
const objectToFormData = (obj) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    if (obj[key] !== undefined) {
      formData.append(key, value);
    }
  }
  return formData;
};

export {
  objectToFormData,
};
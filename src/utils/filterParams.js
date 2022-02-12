export const removeFalsyValue = (data) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value === "" || value === null || value === undefined) {
      delete data[key];
    }
  });
  return data;
};

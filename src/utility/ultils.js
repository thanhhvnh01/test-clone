export const enumToSelectOptions = (obj) => {
  const keys = Object.keys(obj);
  return keys.map((key) => ({
    id: obj[key],
    label: key,
  }));
};

export const arrayToSelectOptions = (arr, labelKey, valueKey, conditionKey, getAll = false) => {
  if (Array.isArray(arr)) {
    return arr.map((c) => {
      return {
        label: c[labelKey],
        id: c[valueKey],
        ...(!!conditionKey && {
          condition: c[conditionKey],
        }),
        ...(getAll && { item: c }),
      };
    });
  }
};

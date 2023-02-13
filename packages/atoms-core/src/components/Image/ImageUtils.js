export const getFilterClass = (filterType) => {
  if (filterType === undefined) {
    return '';
  }

  return (
    {
      Sepia: ' is-sepia',
      BlackAndWhite: ' is-bw',
      Blur: ' is-blurred',
    }[filterType] || ''
  );
};
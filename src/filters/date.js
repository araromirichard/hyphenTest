export default (value) => {
  const date = new Date(value);
  return date.toLocaleDateString(["en-GB"], {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });
};

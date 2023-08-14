export function filterNumber(callback) {
  return filterValue(/\D+/g, callback);
}

export function filterValue(regex, callback) {
  return (event) => {
    const value = event.target.value;
    const number = Number(value.replaceAll(regex, ""));
    callback(number);
  };
}

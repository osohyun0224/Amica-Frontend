export function filterNumber(callback) {
  return filterValue(/\D+/g, callback);
}

export function filterValue(regex, callback) {
  return (event) => {
    const value = event.target.value;
    const number = value.replaceAll(regex, "");
    callback(number);
  };
}

export function debounce(callback, ms = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, ms);
  };
}

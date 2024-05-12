const getFormattedDate = (value, type, inMS) => {
  if (!inMS) {
    value = value * 1000;
  }
  const date = new Date(value);
  let options;
  if (type === "date") {
    options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export { getFormattedDate };

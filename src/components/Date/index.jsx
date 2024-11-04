const DateComponent = ({ isoDate }) => {
  const date = new Date(isoDate);

  const formattedDate = date.toLocaleDateString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <p>{formattedDate}</p>;
};

export default DateComponent;

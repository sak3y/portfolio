// Experience components
const Experience = ({ title, company, dateFrom, dateTo }) => {
  return (
    <div className="experience">
      <h3>
        {title} {company ? ` @ ${company}` : ""}
      </h3>
      <time dateTime={dateFrom}>{dateFrom}</time>
      {dateFrom && dateTo ? " - " : ""} <time dateTime={dateTo}>{dateTo}</time>
    </div>
  );
};

export default Experience;
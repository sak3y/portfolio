import SlideUp from "./animations";
import Experience from "./experience";

const Experiences = () => {
  const experiencesCard = [
    {
      title: "Telephone Interviewer",
      company: "IFF Research",
      dateFrom: "October 2025",
      dateTo: "Present",
    },
    {
      title: "Freelance Web Developer",
      company: "",
      dateFrom: "July 2025",
      dateTo: "Present",
    },
  ];

  return (
    <section id="experience-section">
      <SlideUp>
        <h2 style={{ textAlign: "center", marginBottom: "6rem" }}>Experiences</h2>
      </SlideUp>
      <div className="experiences">
        {experiencesCard.map((e) => (
          <SlideUp key={e.title}>
            <Experience
              title={e.title}
              company={e.company}
              dateFrom={e.dateFrom}
              dateTo={e.dateTo}
            />
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default Experiences;

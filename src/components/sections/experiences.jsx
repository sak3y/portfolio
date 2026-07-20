import SlideUp from "../ui/animations";
import Experience from "../experience";

const Experiences = () => {
  const experiencesCard = [
    {
      title: "Door Supervisor",
      company: "Habib Security",
      dateFrom: "July 2025",
      dateTo: "Present",
    },
    {
      title: "Freelance Web Developer",
      dateFrom: "October 2025",
      dateTo: "June 2026",
    }
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

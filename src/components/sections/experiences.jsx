import SlideUp from "../animations";
import Experience from "../experience";

const Experiences = () => {
  const experiencesCard = [
    {
      title: "Web Developer",
      company: "Freelance",
      dateFrom: "October 2025",
      dateTo: "Present",
    },
    {
      title: "Telephone Interviewer",
      company: "IFF Research",
      dateFrom: "September 2025",
      dateTo: "December 2025",
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

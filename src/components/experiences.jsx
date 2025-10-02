import SlideUp from "./animations";
import Experience from "./experience";

const Experiences = () => {
  return (
    <section id="experience-section">
      <SlideUp>
        <h2>Experiences</h2>
      </SlideUp>
      <div className="experiences">
        <SlideUp>
          <Experience title="Web Developer" company="" dateFrom="June 2025" dateTo="Present" />
        </SlideUp>
        <SlideUp>
          <Experience title="Virtual Intern" company="Bright Network" dateFrom="July 2025" />
        </SlideUp>
        <SlideUp>
          <Experience
            title="Sales Representative "
            company="Antzara Organisation"
            dateFrom="June 2024"
            dateTo="September 2024"
          />
        </SlideUp>
      </div>
    </section>
  );
};

export default Experiences;

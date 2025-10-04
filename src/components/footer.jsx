import SlideUp from "./animations";
import Form from "./form";

const footer = () => {
  return (
    <footer>
      {/*Contact/form section */}
      <SlideUp>
        <div style={{ marginTop: "2rem" }} className="content">
          <h2>Get in Touch</h2>
          <p style={{ width: "70%" }} className="paragraph">
            Whether you're looking to say hello or hire some real talent. Feel free to send me a
            message and I'll get back to you as soon as I can.
          </p>
        </div>
        <Form />
      </SlideUp>
      {/* Copywrite statement*/}
      <div style={{ marginTop: "4rem" }} className="copywrite">
        Copywrite © 2025 Sheikh Ahmed. All rights reserved.
      </div>
    </footer>
  );
};
export default footer;

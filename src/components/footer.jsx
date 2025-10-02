import SlideUp from "./animations";
import Form from "./form";

const footer = () => {
  return (
    <footer id="footer-section">
      <SlideUp>
        <h2>Get in Touch</h2>
        <p id="footer-description" className="paragraph">
          Whether you're looking to say hello or hire some real talent. Feel free to send me a
          message and I'll get back to you as soon as I can.
        </p>
        <Form />
      </SlideUp>

      <hr />

      <div className="copywrite">Copywrite © 2025 Sheikh Ahmed. All rights reserved.</div>
    </footer>
  );
};
export default footer;

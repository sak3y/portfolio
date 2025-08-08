import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("meozlqye");
  if (state.succeeded) {
    return <p>Submitted</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input id="name" type="name" name="name" placeholder="Enter name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <input id="email" type="email" name="email" placeholder="Enter email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea id="message" name="message" placeholder=" Message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button id="submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default Form;
import classes from "./Contact.module.css";
import useInput from "../../hooks/use-input";

function Contact() {
  const {
    value: nameInput,
    isValid: enteredNameIsValid,
    isInvalid: nameInputIsInvalid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: enteredEmailIsValid,
    isInvalid: emailInputIsInvalid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: numberInput,
    isValid: enteredNumberIsValid,
    isInvalid: numberInputIsInvalid,
    onChangeHandler: numberChangeHandler,
    onBlurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: messageInput,
    isValid: enteredMessageIsValid,
    isInvalid: messageInputIsInvalid,
    onChangeHandler: messageChangeHandler,
    onBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredNumberIsValid &&
      !enteredMessageIsValid
    ) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetNumberInput();
    resetMessageInput();
  };

  return (
    <div className={classes.contact}>
      <div className={classes.contents}>
        <span>
          <h1>contact us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </span>
      </div>

      <form onSubmit={onSubmitHandler} className={classes.form}>
        <input
          value={nameInput}
          type="text"
          placeholder="Name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        <input
          value={emailInput}
          type="email"
          placeholder="Email Address"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />

        <input
          value={numberInput}
          type="text"
          placeholder="Phone No"
          onChange={numberChangeHandler}
          onBlur={numberBlurHandler}
        />

        <textarea
          value={messageInput}
          rows="7"
          cols="25"
          placeholder="Your Message"
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

import Button from "../Button/Button";
import "./JournalForm.scss";
import Input from "../Input/Input";
import { useEffect, useReducer, useRef } from "react";
import { INITIAL_STATE, formReduser } from './JournalForm.state';

function JournalForm({ onSubmit }) {
  const [formstate, dispatchForm] = useReducer(formReduser, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formstate;
  const titleRef = useRef();
  const postRef = useRef();
  const textRef = useRef();

  const focusError = (isValid) => {
    switch(true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
      case !isValid.post:
        postRef.current.focus();
        break;
    }
  }
  useEffect(() => {
    if (!isValid.post || !isValid.text || !isValid.title) {
      focusError(isValid);
      const timerId = setTimeout(() => {
        dispatchForm({type: 'RESET_VALIDITY'})
      }, 2000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [isValid]);
  useEffect(() => {
    if(isFormReadyToSubmit) {
        onSubmit(values);
        dispatchForm({type: 'CLEAR'});
    }
  }, [isFormReadyToSubmit])

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({type: 'SUBMIT'})
  };

  const onChange = (e) => {
     dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}})
  }

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <Input
        type="text"
        name="title"
        ref={titleRef}
        value={values.title}
        onChange={onChange}
        className={isValid.title ? "" : "invalid-form"}
      />
      <Input
        type="text"
        name="text"
        ref={textRef}
        value={values.text}
        onChange={onChange}
        className={isValid.text ? "" : "invalid-form"}
      />
      <textarea
        name="post"
        ref={postRef}
        value={values.post}
        onChange={onChange}
        className={isValid.post ? "" : "invalid-form"}
      ></textarea>
      <Button text={"Сохранить"} />
    </form>
  );
}

export default JournalForm;

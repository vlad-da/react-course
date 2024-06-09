import Button from "../Button/Button";
import "./JournalForm.scss";
import { useEffect, useState } from "react";

function JournalForm({ onSubmit }) {
  const [vlidState, setValidState] = useState({
    title: true,
    text: true,
    post: true,
  });

  useEffect(() => {
    if (!vlidState.post || !vlidState.text || !vlidState.title) {
      const timerId = setTimeout(() => {
        setValidState({
          title: true,
          text: true,
          post: true,
        });
      }, 2000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [vlidState]);

  const addJournalItem = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    e.preventDefault();
    let isValid = true;
    if (!formProps.title?.trim().length) {
      setValidState((state) => ({
        ...state,
        title: false,
      }));
      isValid = false;
    } else {
      setValidState((state) => ({
        ...state,
        title: true,
      }));
      isValid = true;
    }
    if (!formProps.text?.trim().length) {
      setValidState((state) => ({
        ...state,
        text: false,
      }));
      isValid = false;
    } else {
      setValidState((state) => ({
        ...state,
        text: true,
      }));
      isValid = true;
    }
    if (!formProps.post?.length) {
      setValidState((state) => ({
        ...state,
        post: false,
      }));
      isValid = false;
    } else {
      setValidState((state) => ({
        ...state,
        post: true,
      }));
      isValid = true;
    }
    if (!isValid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        type="text"
        name="title"
        className={vlidState.title ? "" : "invalid-form"}
      />
      <input type="date" name="date" />
      <input
        type="text"
        name="text"
        className={vlidState.text ? "" : "invalid-form"}
      />
      <textarea
        name="post"
        className={vlidState.post ? "" : "invalid-form"}
      ></textarea>
      <Button text={"Сохранить"} />
    </form>
  );
}

export default JournalForm;

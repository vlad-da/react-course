import Button from '../Button/Button';
import './JournalForm.scss';

function JournalForm({onSubmit}) {

    const inputChange = (e) => {
        console.log(e.target.value);
        
      };
    const addJournalItem = (e) => {
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        e.preventDefault();
        onSubmit(formProps);
        
    }

  return (
   <form className='journal-form' onSubmit={addJournalItem}>
    <input type='text' name='title' onChange={inputChange}/>
    <input type='date' name='date' onChange={inputChange}/>
    <input type='text' name='text'/>
    <textarea name='post'  onChange={inputChange}></textarea>
    <Button  text={"Сохранить"} onClick={() => console.log('123')}/>
   </form>
  )
}

export default JournalForm;

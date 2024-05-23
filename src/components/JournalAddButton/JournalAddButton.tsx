import CardButton from '../CardButton/CardButton';
import './JournalAddButton.scss';

function JournalAddButton() {

  return (
    <CardButton className="journal-add">
         <img src="/plus.svg" alt="logo" /> Передаю текст
    </CardButton>
  )
}

export default JournalAddButton;

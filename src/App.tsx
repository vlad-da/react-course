import './App.scss';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import JournalList from './components/JournalList/JournalList';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

import { useState } from 'react';

function App() {
  const [data, setData] = useState([{
    title: 'Подготовка к обновлению курсов',
    text: 'Горные походы открывают удивительные природные ландшафты',
    date: new Date()
  },
  {
    title: 'Подготовка к обновлению курсов1',
    text: 'Горные походы открывают удивительные природные ландшафты1',
    date: new Date()
  }]);

  const addDataItem = (item) => {
    setData(oldData => [...oldData, item]);
  }

  
  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton/>
        <JournalList>
          {data.map((el) => (
            <CardButton>
              <JournalItem title = {el.title}
                           date = {el.date}
                           text = {el.text} />
            </CardButton>
          ))}
          
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit = {addDataItem}/>
      </Body>
     
    </div>
  )
}

export default App

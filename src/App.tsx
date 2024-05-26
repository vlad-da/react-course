import "./App.scss";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import JournalList from "./components/JournalList/JournalList";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";

import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Подготовка к обновлению курсов",
      text: "Горные походы открывают удивительные природные ландшафты",
      date: new Date(),
    },
    {
      id: 2,
      title: "Подготовка к обновлению курсов1",
      text: "Горные походы открывают удивительные природные ландшафты1",
      date: new Date(),
    },
  ]);

  const addDataItem = (item) => {
    setData((oldData) => [
      ...oldData,
      {
        text: item.text,
        title: item.title,
        date: item.date,
        id: oldData.length > 0 ? Math.max(...oldData.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  const sortItems = (a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {data.length === 0 ? (
            <div>Пусто</div>
          ) : (
            data.sort(sortItems).map((el) => (
              <CardButton key={el.id}>
                <JournalItem title={el.title} date={el.date} text={el.text} />
              </CardButton>
            ))
          )}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addDataItem} />
      </Body>
    </div>
  );
}

export default App;

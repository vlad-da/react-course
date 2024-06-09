import "./App.scss";
import JournalItem from "./components/JournalItem/JournalItem";
import CardButton from "./components/CardButton/CardButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import JournalList from "./components/JournalList/JournalList";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";

import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setItems(
        data.map((el) => ({
          ...el,
          date: "1234",
        })),
      );
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.setItem("data", JSON.stringify(items));
    }
  }, [items]);

  const addDataItem = (item) => {
    setItems((oldData) => [
      ...oldData,
      {
        text: item.text,
        title: item.title,
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
          {items.length === 0 ? (
            <div>Пусто</div>
          ) : (
            items.sort(sortItems).map((el) => (
              <CardButton key={el.id}>
                <JournalItem title={el.title} text={el.text} />
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

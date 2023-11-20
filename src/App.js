import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/main/main';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import css from './index.css';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('listTasks')) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('listTasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;

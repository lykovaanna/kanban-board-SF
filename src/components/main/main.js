import { Routes, Route } from 'react-router-dom';
import css from './main.module.scss';
import { Board } from '../board/board/board';
import { TaskDetails } from '../board/task details/task_details';

export function Main(props) {
  return (
    <main className={css.main}>
      <Routes>
        <Route exact path="/" element={<Board {...props} />} />
        <Route path="/tasks/:taskId" element={<TaskDetails {...props} />} />
      </Routes>
    </main>

  );
}

import uniqid from 'uniqid';
import { List } from '../list/list/list';
import css from './board.module.scss';
import { LIST_TYPES, LIST_COPY } from '../../../config';

export function Board(props) {
  const { tasks, setTasks } = props;

  const addNewTask = (title, description) => {
    const task = {
      id: uniqid(),
      title,
      description,
      status: LIST_TYPES.BACKLOG,
    };
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div className={css.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const tasksListFiltered = tasks.filter((task) => task.status === type);
        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            tasks={tasksListFiltered || []}
            addNewTask={addNewTask}
            notFilteredTasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
}

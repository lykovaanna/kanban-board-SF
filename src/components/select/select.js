import React from 'react';
import css from './select.module.scss';
import { LIST_TYPES } from '../../config';

export function Select(props) {
  const {
    notFilteredTasks, type, setTasks, handleSelectVisible,
  } = props;

  const handleSelectChange = (e) => {
    const updatedTask = notFilteredTasks.map((task) => {
      if (task.id === e.target.value) {
        return { ...task, status: type };
      }
      return task;
    });
    setTasks(updatedTask);
    handleSelectVisible(false);
  };

  return (
    <select key={notFilteredTasks} className={css.select} onChange={handleSelectChange}>

      <option className={css.chooseTask}>choose task</option>

      {type === LIST_TYPES.READY && (
        notFilteredTasks.filter((task) => task.status === 'backlog').map((tasks) => (
          <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
        )))}

      {type === LIST_TYPES.IN_PROGRESS && (
        notFilteredTasks.filter((task) => task.status === 'ready').map((tasks) => (
          <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
        )))}

      {type === LIST_TYPES.FINISHED && (
        notFilteredTasks.filter((task) => task.status === 'inProgress').map((tasks) => (
          <option className={css.option} key={tasks.id} value={tasks.id}>{tasks.title}</option>
        )))}

    </select>

  );
}

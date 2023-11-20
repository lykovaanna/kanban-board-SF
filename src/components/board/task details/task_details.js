import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import css from './task_details.module.scss';
import { Button } from '../../shared/button/button';
import remove from '../../shared/icons/icon-remove.svg';

export function TaskDetails(props) {
  const { taskId } = useParams();
  const { tasks, setTasks } = props;
  const task = tasks.find((task) => task.id === taskId);

  const [values, setValues] = useState({
    description: task.description,
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  };

  const saveDescription = () => {
    task.description = values.description;
    setTasks([...tasks]);
  };

  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  return (
    <div className={css.wrapper}>

      <Button className={css.btnClose} onClick={navigateBack}>
        <img
          src={remove}
          alt="remove"
        />
      </Button>
      <div className={css.title}>{task.title}</div>

      <textarea
        className={css.description}
        name="description"
        type="text"
        value={values.description}
        onChange={handleChange}
        placeholder="No description yet"
      />
      <button
        className={css.btnSave}
        type="button"
        onClick={() => { saveDescription(); navigateBack(); }}
      >
        Save

      </button>
    </div>
  );
}

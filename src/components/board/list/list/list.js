import { useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import { Card } from '../card/card';
import css from './list.module.scss';
import { Button } from '../../../shared/button/button';
import { LIST_TYPES } from '../../../../config';
import { Select } from '../../../select/select';

export function List(props) {
  const {
    title, type, tasks, addNewTask, setTasks, notFilteredTasks,
  } = props;
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [values, isHidden] = useState({
    title: '',
  });

  const handleClick = () => {
    setFormVisible((prev) => !prev);
  };

  const formSubmit = (title, description) => {
    addNewTask(title, description);
    setFormVisible(false);
  };

  const handleSelectVisible = () => {
    setSelectVisible(((prev) => !prev));
  };

  const removeTask = (id) => {
    const findTask = notFilteredTasks.find((task) => task.id === id);
    if (findTask) {
      setTasks([...notFilteredTasks.filter((task) => task !== findTask)]);
    }
  };

  return (
    <div className={css.list}>
      <div className={css.header}>{title}</div>
      <div className={css.wrapper}>
        <div className={css.body}>

          <Scrollbars autoHeightMax={400} autoHide autoHeight>
            {tasks.map((task) => (
              <div className={css.card}>
                <Link to={`/tasks/${task.id}`} key={task.id} className={css.link}>
                  <p className={css.title}>
                    {task.title}
                  </p>
                </Link>
                <Button
                  className={css['button-remove']}
                  onClick={() => removeTask(task.id)}
                  alt="remove"
                />
              </div>
            ))}
          </Scrollbars>

        </div>
        <div className={css.footer}>

          {type === LIST_TYPES.BACKLOG && isFormVisible && (
          <Card formSubmit={formSubmit} />
          )}

          {isFormVisible ? (type === LIST_TYPES.BACKLOG
          && (
          <Button
            className={css['button-add-hidden']}
            onClick={handleClick}
          />
          )
          ) : (type === LIST_TYPES.BACKLOG
            && (
            <Button
              className={css['button-add']}
              onClick={handleClick}
            >
              + Add card
            </Button>
            ))}

          <div className={css.selectCard}>
            {type !== LIST_TYPES.BACKLOG && isSelectVisible && (
            <Select
              {...props}
              handleSelectVisible={handleSelectVisible}
            />
            )}

            {type !== LIST_TYPES.BACKLOG
                    && (isSelectVisible
                      ? (
                        <Button
                          className={css['button-add']}
                          onClick={handleSelectVisible}
                        >
                          {' '}
                          Hide
                          {' '}

                        </Button>
                      )
                      : (
                        <Button
                          className={css['button-add']}
                          onClick={handleSelectVisible}
                        >
                          {' '}
                          + Add card
                          {' '}

                        </Button>
                      )
                    )}
          </div>
        </div>
      </div>
    </div>
  );
}

import css from './footer.module.scss';

export function Footer(props) {
  const { tasks } = props;
  const activeTaskCount = tasks.filter((task) => task.status === 'backlog');
  const finishedTaskCount = tasks.filter((task) => task.status === 'finished');

  return (
    <footer className={css.footer}>
      <div>
        <span>
          Active tasks: &lt;
          {activeTaskCount.length}
          &gt;
        </span>
        <span>
          FinishedTask:  &lt;
          {finishedTaskCount.length}
          &gt;
        </span>
      </div>
      <span>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</span>
    </footer>
  );
}

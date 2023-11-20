import css from './header.module.scss';
import { Profile } from './profile/profile';

export function Header() {
  return (
    <header className={css.header}>
      <h1>Kanban Board</h1>
      <Profile />
    </header>
  );
}

import {useState} from 'react';
import css from './profile.module.scss';
import arrowUp from '../../shared/icons/arrow-up.svg';
import arrowDown from '../../shared/icons/arrow-down.svg';
import imgProfile from '../../shared/icons/user-avatar.svg';
import rectangle from '../../shared/icons/rectangle.svg';

export function Profile() {
  const [isMenuShown, setMenuShown] = useState(false);

  return (
    <div
      className={css.profile}
      onClick={() => setMenuShown(!isMenuShown)}
    >
      <img className={css.avatar} src={imgProfile} alt="avatar" />
      <button className={css.button} type="button">
        {isMenuShown ? <img src={arrowUp} alt="" /> : <img src={arrowDown} alt="" />}
      </button>

      {isMenuShown && (
      <div className={css.menu}>
        <div className={css.rect}>
          <img src={rectangle} alt="rect" />
        </div>
        <div className={css.menuLink}>Profile</div>
        <div className={css.menuLink}>Log</div>
      </div>
      )}

    </div>
  );
}

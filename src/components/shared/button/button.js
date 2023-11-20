import css from './button.module.scss';

export function Button(props) {
  return (
    <button className={`${props.className} ${css.button}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

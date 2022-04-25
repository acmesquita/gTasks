import style from '../styles/button.module.css'

type Props = {
  onClick?: () => void
}

export const BtnGithub = (props: Props) => {
  return <button {...props} className={style.btn}>Login com o Github</button>;
};

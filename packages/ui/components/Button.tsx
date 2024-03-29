import style from '../styles/button.module.css'
import { BiTrash } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

type Props = {
  onClick?: () => void
}

export const BtnGithub = (props: Props) => {
  return <button {...props} className={style.btn}><BsGithub color="#fff"/> Login com o Github</button>;
};

export const BtnAdd = (props: Props) => {
  return <button {...props} className={style.btnAdd}>Add</button>;
};

export const BtnDel = (props: Props) => {
  return <button {...props} className={style.btnDel}><BiTrash size={24} color="red" /></button>;
};

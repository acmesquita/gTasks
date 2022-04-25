import styles from '../styles/form.module.css'

type Props = {
  children: any
}

export const Form = ({ children }: Props) => {
  return <form className={styles.form}>{children}</form>
};

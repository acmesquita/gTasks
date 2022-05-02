import styles from '../styles/textfield.module.css'

export const TextField = () => {
  return <input type="text" name="content" placeholder="What need to be done?" className={styles.textfield}/>
};

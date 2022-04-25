import Head from 'next/head';
import { BtnAdd, BtnDel, Form, TextField } from 'ui';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tasks Manager</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="" />
          </div>
          <div className={styles.avatar}>
            <img src="https://github.com/acmesquita.png" alt="" />
            <div>
              <h3>Catharina Mesquita</h3>
              <a href="#">Sair</a>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <Form>
            <TextField />
            <BtnAdd />
          </Form>
        </div>

        <div className={styles.listWrapper}>
          <h2 className={styles.listTitle}>Todo list</h2>
          <ul className={styles.list}>
            <hr className={styles.divider} />
            <li className={styles.listItem}>
              <div className={styles.itemText}>
                <input type="checkbox" name="tasks1" id="tasks1" />
                <label htmlFor='tasks1'>Marcar um horário na academia</label>
              </div>
              <div>
                <BtnDel />
              </div>
            </li>
            <hr className={styles.divider} />
            <li className={styles.listItem}>
              <div className={styles.itemText}>
                <input type="checkbox" name="tasks2" id="tasks2" />
                <label htmlFor='tasks2'>Marcar um horário na academia</label>
              </div>
              <div>
                <BtnDel />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

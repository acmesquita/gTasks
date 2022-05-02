/* eslint-disable @next/next/no-img-element */
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { BtnAdd, BtnDel, Form, TextField } from 'ui';
import { apiLocal } from '../lib/api';
import styles from '../styles/home.module.css';


export default function Home() {

  const { data: session } = useSession()

  async function createTask(content: string) {
    const data = {
      content,
      name: session?.user?.name,
      avatarUrl: session?.user?.image
    }
    console.log('Data', data)
    const response = await apiLocal.post('/tasks', data)

    alert(JSON.stringify(response.data, null, 2))
  }

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
            <img src={session?.user?.image || ''} alt="" />
            <div>
              <h3>{session?.user?.name}</h3>
              <a
                href="#"
                onClick={() => signOut()}
              >Sair</a>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <Form onSubmit={createTask}>
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

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BtnAdd, BtnDel, Checkbox, Form, TextField } from 'ui';
import { apiLocal } from '../lib/api';
import styles from '../styles/home.module.css';

type Task = {
  id: string
  content: string
  done: boolean
  createdAt: string
  name: string
  avatarUrl: string
}

export default function Home() {

  const { data: session } = useSession()
  const [tasks, setTasks] = useState<Task[]>([])
  
  useEffect(() => {
    apiLocal.get('/tasks')
      .then(response => response.data)
      .then(data => setTasks(data.tasks))
    
  }, [])

  async function createTask(content: string) {
    const data = {
      content,
      name: session?.user?.name,
      avatarUrl: session?.user?.image
    }
    const response = await apiLocal.post('/tasks', data)


    setTasks(old => [response.data.task, ...old])
  }

  async function markDone(idTaks: string) {
    const response = await apiLocal.patch(`/tasks/${idTaks}`, {})

    setTasks(old => {
      return old.map(task => {
        if (task.id === idTaks) {
          task.done = response.data.task.done
        }
        return task
      })
    })
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
          <h2 className={styles.listTitle}>Todo</h2>
          <ul className={styles.list}>
            <hr className={styles.divider} />
            {tasks.map((task) => {
              return (
                <React.Fragment key={task.id}>
                  <li className={styles.listItem}>
                    <div className={styles.flex1}>
                      <div className={styles.itemText}>
                        <Checkbox
                          checked={task.done}
                          onClick={async () => await markDone(task.id)}
                        />
                        <label htmlFor={task.id}>{task.content}</label>
                      </div>
                      <div className={styles.itemUser}>
                        <img src={task.avatarUrl} alt={task.name} />
                        <small>{`${task.name} ${task.createdAt}`}</small>
                      </div>
                    </div>
                    <div>
                      <BtnDel />
                    </div>
                  </li>
                  <hr className={styles.divider} />
                </React.Fragment>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

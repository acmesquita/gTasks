/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BtnAdd, BtnDel, Checkbox, Form, TextField } from 'ui';
import { apiLocal } from '../lib/api';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import { Task } from '../@types/task';

export default function Home() {

  const { data: session } = useSession()
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    apiLocal.get('/tasks')
      .then(response => response.data)
      .then(data => {
        setTasks(data.tasks)
      })
    setIsLoading(false)
    
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

  async function markDone(idTask: string) {
    const response = await apiLocal.patch(`/tasks/${idTask}`, {})

    setTasks(old => {
      return old.map(task => {
        if (task.id === idTask) {
          task.done = response.data.task.done
        }
        return task
      })
    })
  }

  async function deleteTask(idTask: string) {
    setTasks(old => old.filter(task => task.id !== idTask))
    await apiLocal.delete(`/tasks/${idTask}`, {})
  }

  return (
    <>
      <Head>
        <title>gTasks</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="Logo" width={50} height={50}/>
            <h2>gTasks</h2>
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
          <h2 className={styles.listTitle}>Tasks</h2>
          <ul className={styles.list}>
            <hr className={styles.divider} />
            {isLoading && (
              <React.Fragment>
              <li className={styles.listItem}>
                <div className={styles.flex1}>
                  <div className={styles.itemText}>
                    <label>Carregando...</label>
                  </div>
                </div>
              </li>
              <hr className={styles.divider} />
            </React.Fragment>
            )}
            {!isLoading && tasks.length == 0 && (
              <React.Fragment>
              <li className={styles.listItem}>
                <div className={styles.flex1}>
                  <div className={styles.itemText}>
                    <label>Nenhum item registrado</label>
                  </div>
                </div>
              </li>
              <hr className={styles.divider} />
            </React.Fragment>
            )}
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
                      <BtnDel onClick={async () => await deleteTask(task.id)}/>
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

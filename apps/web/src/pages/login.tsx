import Head from 'next/head'
import { BtnGithub } from "ui";
import styles from '../styles/login.module.css'

export default function Login(){

  return (
    <>
      <Head>
        <title>Tasks Manager</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.title}>
            <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="" />
            <h1>Tasks Manager</h1>
          </div>
          <BtnGithub />
        </div>
      </main>
    </>
  )
}
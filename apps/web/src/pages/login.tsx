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
          <h1>Tasks Manager</h1>
          <BtnGithub />
        </div>
      </main>
    </>
  )
}
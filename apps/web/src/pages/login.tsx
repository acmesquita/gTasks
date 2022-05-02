import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import Head from 'next/head'
import { BtnGithub } from "ui";
import styles from '../styles/login.module.css'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

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
          <BtnGithub onClick={() => signIn('github')}/>
        </div>
      </main>
    </>
  )
}
import { GetServerSideProps } from 'next';
import { getSession, signIn } from 'next-auth/react';
import Head from 'next/head'
import Image from 'next/image';
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
        <title>gTasks</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.title}>
            <Image src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="Logo" width={50} height={50}/>
            <h1>gTasks</h1>
          </div>
          <BtnGithub onClick={() => signIn('github')}/>
        </div>
      </main>
    </>
  )
}
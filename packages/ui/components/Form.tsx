import { FormEvent } from 'react';
import styles from '../styles/form.module.css'

type Props = {
  children: any
  onSubmit: (content: string) => Promise<void>
}

export const Form = ({ children, onSubmit }: Props) => {

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    //@ts-ignore
    const content = event.target.content.value
    await onSubmit(content)
    //@ts-ignore
    event.target.content.value = ''
  }
  return <form onSubmit={handleSubmit} className={styles.form}>{children}</form>
};

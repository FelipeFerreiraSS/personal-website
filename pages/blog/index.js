import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Felipe Ferreira|Desenvolvedor Front-End</title>
        <meta name="description" content="Desenvolvedor Front-End Júnior | Java script | React JS | Next JS " />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Blog Page
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/FelipeFerreiraSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado por Felipe Ferreira
        </a>
      </footer>
    </div>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jaran Blog</title>
        <meta name="description" content="Jaran Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Jaran Blog</a>
        </h1>

        <p className={styles.description}>
          个人日常学习积累记录
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>前端</h2>
            <p>html css javascript typescript vue react ...</p>
          </a>

          <a href="" className={styles.card}>
            <h2>移动端</h2>
            <p>Flutter dart react-native android/java swift ...</p>
          </a>

          <a href="" className={styles.card}>
            <h2>桌面端</h2>
            <p>NW Electorn node rust...</p>
          </a>

          <a href="" className={styles.card}>
            <h2>工具</h2>
            <p>git npm pnpm homebrew shell ...</p>
          </a>

          <a href="" className={styles.card}>
            <h2>faq</h2>
            <p>问题解决方案和踩坑记录</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home

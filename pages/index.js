import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, Im Thithuha</p>
        <p>
          (This is my personal website - where i show my projects in the past and up coming{' '}
          <a href="https://nextjs.org/learn">check out my CV</a>.)
        </p>
      </section>
    </Layout>
  )
}

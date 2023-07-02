import Head from 'next/head'
import Layout from '../components/layout/layout'
import Hero from '../components/home/hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>EduFusion</title>
      </Head>
      <Hero />
    </Layout>
  )
}  

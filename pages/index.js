import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>FrontEnd Farm</title>
          <meta name='description' content='FrontEnd Farm' />
        </Head>
      </div>
      <main className='w-screen h-screen bg-blue-400 flex'>
        <h1 className='text-gray-900 m-auto text-4xl'>FrontEnd Farm</h1>
      </main>
    </div>
  );
}

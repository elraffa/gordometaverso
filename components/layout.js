import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Gordometaverso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}

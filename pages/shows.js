import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/Home.module.scss';
import ArrowTop from '../components/ArrowTop';
import Image from 'next/image';


export default function Shows() {
  return (

    <div>
      <div className="main">
        <h1 className='main__title' id="title">Shows</h1>
        <div className='main__text'>
          <p className='main__par'>
            Estamos en Macondo (Jorge Luis Borges 1610, Plaza Serrano, CABA) jueves, viernes y sabados a las 11.
          </p>
          <ArrowTop />
        </div>
      </div>
    </div>
  );
}

Shows.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Header />
      {page}
      <Footer />
    </Layout>
  );
};
